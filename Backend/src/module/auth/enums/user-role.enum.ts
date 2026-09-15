/**
 * Roles conocidos del sistema SIRD.
 * Los roles se guardan SIEMPRE con esta capitalización exacta en la base de datos.
 */
export enum UserRole {
  ADMIN = 'Admin',
  DOCENTE = 'Docente',
}

export const USER_ROLES: string[] = Object.values(UserRole);

/**
 * Devuelve el nombre canónico del rol sin importar espacios ni mayúsculas/minúsculas.
 * Ej: 'docente' -> 'Docente'. Roles personalizados se devuelven solo con trim.
 */
export function normalizeRoleName(value?: string | null): string {
  const clean = (value ?? '').trim();
  if (!clean) return '';
  const match = USER_ROLES.find(
    (role) => role.toLowerCase() === clean.toLowerCase(),
  );
  return match ?? clean;
}

/**
 * Compara dos nombres de rol ignorando mayúsculas/minúsculas y espacios.
 */
export function roleMatches(a?: string | null, b?: string | null): boolean {
  return (a ?? '').trim().toLowerCase() === (b ?? '').trim().toLowerCase();
}
