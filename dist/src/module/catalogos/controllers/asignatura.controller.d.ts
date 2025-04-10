import { AsignaturaService } from '../services/asignatura.service';
import { createAsignaturaDto } from '../dtos/asignatura.dto';
export declare class AsignaturaController {
    private readonly asignaturaService;
    constructor(asignaturaService: AsignaturaService);
    findAll(): Promise<{
        data: import("..").Asignatura[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Asignatura;
        message: string;
    }>;
    create(payload: createAsignaturaDto): Promise<{
        data: import("..").Asignatura;
        message: string;
    }>;
    update(id: number, payload: createAsignaturaDto): Promise<{
        data: import("..").Asignatura;
        message: string;
    }>;
    delete(id: number): Promise<{
        data: void;
        message: string;
    }>;
}
