import { TurnoService } from '../services/turnos.service';
import { createTurnoDto } from '../dtos/turnos.dto';
export declare class TurnoController {
    private readonly turnoService;
    constructor(turnoService: TurnoService);
    findAll(): Promise<{
        data: import("..").Turno[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Turno;
        message: string;
    }>;
    create(payload: createTurnoDto, req: any): Promise<{
        data: import("..").Turno;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    update(id: number, payload: createTurnoDto, req: any): Promise<{
        data: import("..").Turno;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    delete(id: number, req: any): Promise<{
        data: import("..").Turno;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
}
