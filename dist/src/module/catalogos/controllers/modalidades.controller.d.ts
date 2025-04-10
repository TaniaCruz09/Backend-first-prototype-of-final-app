import { ModalidadService } from '../services/modalidad.service';
import { createModalidadDto } from '../dtos/modalidad.dto';
export declare class ModalidadController {
    private readonly modalidadService;
    constructor(modalidadService: ModalidadService);
    findAll(): Promise<{
        data: import("..").Modalidad[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Modalidad;
        message: string;
    }>;
    create(payload: createModalidadDto, req: any): Promise<{
        data: import("..").Modalidad;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    update(id: number, payload: createModalidadDto, req: any): Promise<{
        data: import("..").Modalidad;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    delete(id: number, req: any): Promise<{
        data: import("..").Modalidad;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
}
