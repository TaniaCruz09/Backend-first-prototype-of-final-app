import { StudentEntity } from 'src/module/createEstudents/students.entity';
import { Docentes } from '../../docentes/docentes.entity';
export declare class Pais {
    id: number;
    pais: string;
    docente?: Docentes;
    student?: StudentEntity;
}
