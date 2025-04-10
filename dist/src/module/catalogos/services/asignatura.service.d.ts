import { Asignatura } from "../entities/asignatura.entity";
import { Repository } from "typeorm";
export declare class AsignaturaService {
    private asignaturaRepository;
    constructor(asignaturaRepository: Repository<Asignatura>);
    create(asignatura: Asignatura): Promise<Asignatura>;
    findOne(id: number): Promise<Asignatura>;
    findAll(): Promise<Asignatura[]>;
    update(id: number, updateAsignaturaDTO: Partial<Asignatura>): Promise<Asignatura>;
    delete(id: number): Promise<void>;
}
