import { MunicipioService } from '../services/municipio.service';
import { createMunicipioDto } from '../dtos/municipio.dto';
export declare class MunicipioController {
    private readonly municipioService;
    constructor(municipioService: MunicipioService);
    findAll(): Promise<{
        data: import("..").Municipio[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Municipio;
        message: string;
    }>;
    create(payload: createMunicipioDto): Promise<{
        data: import("..").Municipio;
        message: string;
    }>;
    update(id: number, payload: createMunicipioDto): Promise<{
        data: import("..").Municipio;
        message: string;
    }>;
    delete(id: number): Promise<{
        data: void;
        message: string;
    }>;
}
