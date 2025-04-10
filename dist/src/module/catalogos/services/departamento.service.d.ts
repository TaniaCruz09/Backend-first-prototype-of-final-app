import { Departamento } from "../entities/departamento.entity";
import { Repository } from "typeorm";
export declare class DepartamentoService {
    private departamentoRepository;
    constructor(departamentoRepository: Repository<Departamento>);
    create(departamento: Departamento): Promise<Departamento>;
    findOne(id: number): Promise<Departamento>;
    findAll(): Promise<Departamento[]>;
    update(id: number, updateDepartamentoDTO: Partial<Departamento>): Promise<Departamento>;
    delete(id: number): Promise<void>;
}
