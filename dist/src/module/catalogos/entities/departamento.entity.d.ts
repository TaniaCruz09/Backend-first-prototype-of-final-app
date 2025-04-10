import { StudentEntity } from "../../createEstudents";
import { Docentes } from "../../docentes/docentes.entity";
import { Centro } from "../../centroEducativo/entities/centro.entity";
export declare class Departamento {
    id: number;
    departamento: string;
    docente?: Docentes;
    student?: StudentEntity;
    centro?: Centro;
}
