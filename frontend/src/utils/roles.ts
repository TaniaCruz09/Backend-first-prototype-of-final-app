/**
 * Utilidades de roles del sistema SIRD.
 * Los roles canónicos del sistema son 'Admin' y 'Docente'; cualquier variante
 * de mayúsculas/minúsculas ('admin', 'DOCENTE', 'Docente ') se normaliza.
 */

export const ROL_ADMIN = 'Admin'
export const ROL_DOCENTE = 'Docente'

const KNOWN_ROLES = [ROL_ADMIN, ROL_DOCENTE]

/** Devuelve el nombre canónico del rol sin importar mayúsculas/minúsculas o espacios. */
export function normalizeRole(value?: string | null): string {
    const clean = (value ?? '').trim()
    if (!clean) return ''
    return KNOWN_ROLES.find((role) => role.toLowerCase() === clean.toLowerCase()) ?? clean
}

/** Normaliza una lista de roles que pueden venir como string o como objeto { rol }. */
export function normalizeRoles(values?: (string | { rol?: string } | null)[] | null): string[] {
    if (!Array.isArray(values)) return []
    return values
        .map((value) => normalizeRole(typeof value === 'string' ? value : value?.rol))
        .filter(Boolean)
}

/** ¿La lista de roles contiene el rol indicado? (ignora mayúsculas/minúsculas) */
export function hasRole(
    roles: (string | null | undefined)[] | undefined | null,
    expected: string,
): boolean {
    return (roles ?? []).some(
        (role) => normalizeRole(role).toLowerCase() === expected.trim().toLowerCase(),
    )
}
