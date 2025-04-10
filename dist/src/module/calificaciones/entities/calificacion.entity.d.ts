import { Asignatura } from 'src/module/catalogos';
import { StudentEntity } from 'src/module/createEstudents';
export declare class Calificaciones {
    id?: number;
    estudiante: StudentEntity;
    asignatura: Asignatura;
    notaCualitativa: string;
    notaCuantitativa?: number;
}
