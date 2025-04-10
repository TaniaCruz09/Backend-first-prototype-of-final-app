import { PaisService } from '../services/pais.service';
import { createPaisDto } from '../dtos/pais.dto';
export declare class PaisController {
    private readonly paisService;
    constructor(paisService: PaisService);
    createPais(payload: createPaisDto): Promise<{
        data: import("..").Pais;
        message: string;
    }>;
    findAll(): Promise<{
        data: import("..").Pais[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Pais;
        message: string;
    }>;
    update(id: number, payload: createPaisDto): Promise<{
        data: import("..").Pais;
        message: string;
    }>;
    delete(id: number): Promise<{
        data: import("..").Pais;
        message: string;
    }>;
}
