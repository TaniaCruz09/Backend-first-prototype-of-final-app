import { CreateCalificacionDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
import { Calificaciones } from './entities/calificacion.entity';
import { Repository } from 'typeorm';
export declare class CalificacionesService {
    private readonly calificacionRepo;
    constructor(calificacionRepo: Repository<Calificaciones>);
    create(payload: CreateCalificacionDto): Promise<Calificaciones>;
    findAll(): Promise<Calificaciones[]>;
    findOne(id: number): Promise<Calificaciones>;
    update(id: number, payload: UpdateCalificacioneDto): Promise<Calificaciones>;
    remove(id: number): Promise<void>;
}
