/**
 * Utilidad de mantenimiento: normaliza los nombres de roles conocidos a su
 * forma canónica ('admin' -> 'Admin', 'docente' -> 'Docente').
 *
 * Uso:  node scripts/normalize-role-names.js
 * Es seguro ejecutarlo varias veces: si no hay nada que corregir, no hace cambios.
 * Si ya existe un rol con la forma canónica y además una variante, avisa para
 * revisarse manualmente (no fusiona roles automáticamente).
 */
require('dotenv').config();
const { Client } = require('pg');

const KNOWN_ROLES = ['Admin', 'Docente'];

const connection = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.HOST,
      port: Number(process.env.DATA_BASE_PORT),
      user: process.env.DATA_BASE_USER,
      password: process.env.DATA_BASE_PASSWORD,
      database: process.env.DATA_BASE_NAME,
    };

(async () => {
  const client = new Client(connection);
  await client.connect();

  console.log('Roles antes de normalizar:');
  const { rows } = await client.query(
    'SELECT id, rol, is_active, deleted_at FROM auth.roles ORDER BY id',
  );
  console.table(rows);

  for (const canonical of KNOWN_ROLES) {
    const variants = rows.filter(
      (r) => r.rol !== canonical && String(r.rol).trim().toLowerCase() === canonical.toLowerCase(),
    );

    if (!variants.length) {
      console.log(`OK  '${canonical}': sin variantes que corregir.`);
      continue;
    }

    const exactExists = rows.some((r) => r.rol === canonical);
    if (exactExists) {
      console.warn(
        `AVISO  '${canonical}' ya existe y además hay variantes:`,
        variants.map((v) => `#${v.id}='${v.rol}'`).join(', '),
        '-> revisar manualmente (requiere unificar el rol duplicado).',
      );
      continue;
    }

    const principal = variants[0];
    await client.query('UPDATE auth.roles SET rol = $1 WHERE id = $2', [canonical, principal.id]);
    console.log(`CORREGIDO  Rol #${principal.id}: '${principal.rol}' -> '${canonical}'`);

    if (variants.length > 1) {
      console.warn(
        'AVISO  Quedan más variantes duplicadas del mismo rol:',
        variants.slice(1).map((v) => `#${v.id}='${v.rol}'`).join(', '),
        '-> revisar manualmente.',
      );
    }
  }

  const final = await client.query('SELECT id, rol FROM auth.roles ORDER BY id');
  console.log('Roles después de normalizar:');
  console.table(final.rows);

  await client.end();
})().catch((e) => {
  console.error('Fallo la normalización:', e.message);
  process.exit(1);
});
