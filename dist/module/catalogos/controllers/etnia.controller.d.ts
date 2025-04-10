import { EtniaService } from '../services/etnia.service';
import { createEtniaDto } from '../dtos/etnia.dto';
export declare class EtniaController {
    private readonly etniaService;
    constructor(etniaService: EtniaService);
    create(payload: createEtniaDto, req: any): Promise<{
        data: import("..").Etnia;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    findAll(): Promise<{
        data: import("..").Etnia[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Etnia;
        message: string;
    }>;
    update(id: number, payload: createEtniaDto, req: any): Promise<{
        data: import("..").Etnia;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    delete(id: number, req: any): Promise<{
        data: import("..").Etnia;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
}
