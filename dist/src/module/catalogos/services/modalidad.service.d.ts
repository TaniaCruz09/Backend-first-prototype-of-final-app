import { Repository } from 'typeorm';
import { Modalidad } from '../entities/modalidad.entity';
import { createModalidadDto } from '../dtos/modalidad.dto';
export declare class ModalidadService {
    private modalidadRepository;
    constructor(modalidadRepository: Repository<Modalidad>);
    create(payload: createModalidadDto): Promise<Modalidad>;
    findOne(id: number): Promise<Modalidad>;
    findAll(): Promise<Modalidad[]>;
    update(id: number, payload: createModalidadDto): Promise<Modalidad>;
    delete(id: number, userId: number): Promise<Modalidad>;
}
