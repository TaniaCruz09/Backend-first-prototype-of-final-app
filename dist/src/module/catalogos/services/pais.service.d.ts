import { Pais } from "../entities/pais.entity";
import { Repository } from "typeorm";
export declare class PaisService {
    private paisRepository;
    constructor(paisRepository: Repository<Pais>);
    createPais(pais: Pais): Promise<Pais>;
    findOne(id: number): Promise<Pais>;
    findAll(): Promise<Pais[]>;
    update(id: number, updatePaisDTO: Partial<Pais>): Promise<Pais>;
    delete(id: number): Promise<Pais>;
}
