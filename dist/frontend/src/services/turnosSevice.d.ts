export interface Turno {
    id: number;
    name: string;
}
export declare const getTurnos: () => Promise<Turno[]>;
export declare const addTurno: (turno: Omit<Turno, "id">) => Promise<Turno>;
export declare const deleteTurno: (id: number) => Promise<void>;
