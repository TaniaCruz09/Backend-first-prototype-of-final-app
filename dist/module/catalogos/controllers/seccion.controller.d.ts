import { CreateSeccionDTO } from '../dtos/seccion.dto';
import { SeccionService } from '../services/seccion.service';
export declare class SeccionController {
    private readonly seccionService;
    constructor(seccionService: SeccionService);
    findAll(): Promise<{
        data: import("..").Seccion[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Seccion;
        message: string;
    }>;
    create(payload: CreateSeccionDTO, req: any): Promise<{
        data: import("..").Seccion;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    update(id: number, payload: CreateSeccionDTO, req: any): Promise<{
        data: import("..").Seccion;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    delete(id: number, req: any): Promise<{
        data: import("..").Seccion;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
}
