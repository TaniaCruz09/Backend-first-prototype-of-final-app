import { Repository } from 'typeorm';
import { Seccion } from '../entities/seccion.entity';
import { CreateSeccionDTO } from '../dtos/seccion.dto';
export declare class SeccionService {
    private seccionRepository;
    constructor(seccionRepository: Repository<Seccion>);
    create(payload: CreateSeccionDTO): Promise<Seccion>;
    findAll(): Promise<Seccion[]>;
    findOne(id: number): Promise<Seccion>;
    update(id: number, payload: CreateSeccionDTO): Promise<Seccion>;
    delete(id: number, userId: number): Promise<Seccion>;
}
