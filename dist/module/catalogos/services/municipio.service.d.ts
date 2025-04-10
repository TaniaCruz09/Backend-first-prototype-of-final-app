import { Municipio } from "../entities/municipio.entity";
import { Repository } from "typeorm";
export declare class MunicipioService {
    private municipioRepository;
    constructor(municipioRepository: Repository<Municipio>);
    create(municipio: Municipio): Promise<Municipio>;
    findOne(id: number): Promise<Municipio>;
    findAll(): Promise<Municipio[]>;
    update(id: number, updateMunicipioDTO: Partial<Municipio>): Promise<Municipio>;
    delete(id: number): Promise<void>;
}
