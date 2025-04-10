import { Repository } from 'typeorm';
import { Turno } from '../entities/turnos.entity';
import { createTurnoDto } from '../dtos/turnos.dto';
export declare class TurnoService {
    private turnoRepository;
    constructor(turnoRepository: Repository<Turno>);
    create(payload: createTurnoDto): Promise<Turno>;
    findAll(): Promise<Turno[]>;
    findOne(id: number): Promise<Turno>;
    update(id: number, payload: createTurnoDto): Promise<Turno>;
    delete(id: number, userId: number): Promise<Turno>;
}
