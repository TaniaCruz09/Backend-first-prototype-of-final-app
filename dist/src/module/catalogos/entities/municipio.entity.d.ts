import { StudentEntity } from "src/module/createEstudents";
import { Docentes } from "../../docentes/docentes.entity";
import { Centro } from "../../centroEducativo/entities/centro.entity";
export declare class Municipio {
    id: number;
    municipio: string;
    docente?: Docentes;
    student?: StudentEntity;
    centro?: Centro;
}
