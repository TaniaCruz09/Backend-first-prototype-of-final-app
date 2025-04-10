import { Repository } from 'typeorm';
import { Etnia } from '../entities/etnia.entity';
import { createEtniaDto } from '../dtos/etnia.dto';
export declare class EtniaService {
    private etniaRepository;
    constructor(etniaRepository: Repository<Etnia>);
    create(payload: createEtniaDto): Promise<Etnia>;
    findAll(): Promise<Etnia[]>;
    findOne(id: number): Promise<Etnia>;
    update(id: number, payload: createEtniaDto): Promise<Etnia>;
    delete(id: number, userId: number): Promise<Etnia>;
}
