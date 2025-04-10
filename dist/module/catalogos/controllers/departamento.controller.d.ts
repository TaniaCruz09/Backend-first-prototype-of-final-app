import { DepartamentoService } from '../services/departamento.service';
import { createDepartamentoDto } from '../dtos/departamento.dto';
export declare class DepartamentoController {
    private readonly departamentoService;
    constructor(departamentoService: DepartamentoService);
    findAll(): Promise<{
        data: import("..").Departamento[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("..").Departamento;
        message: string;
    }>;
    create(payload: createDepartamentoDto): Promise<{
        data: import("..").Departamento;
        message: string;
    }>;
    update(id: number, payload: createDepartamentoDto): Promise<{
        data: import("..").Departamento;
        message: string;
    }>;
    delete(id: number): Promise<{
        data: void;
        message: string;
    }>;
}
