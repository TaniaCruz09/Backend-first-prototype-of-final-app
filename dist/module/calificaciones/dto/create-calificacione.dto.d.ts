import { Asignatura } from "src/module/catalogos";
import { StudentEntity } from "src/module/createEstudents";
export declare class CreateCalificacionDto {
    readonly id: number;
    estudiante: StudentEntity;
    asignatura: Asignatura;
    notaCualitativa: string;
    notaCuantitativa: number;
}
