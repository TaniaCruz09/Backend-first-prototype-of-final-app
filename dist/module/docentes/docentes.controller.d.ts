import { DocentesService } from './docentes.service';
import { DocentesDTO } from './docentes.dto';
export declare class DocenteController {
    private readonly registroService;
    constructor(registroService: DocentesService);
    createDocente(createDocenteDto: DocentesDTO, req: any): Promise<{
        data: import("./docentes.entity").Docentes;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    getDocente(): Promise<{
        data: import("./docentes.entity").Docentes[];
        message: string;
    }>;
    getDocenteById(id: number): Promise<{
        data: import("./docentes.entity").Docentes;
        message: string;
    }>;
    editarDocente(id: number, payload: DocentesDTO, req: any): Promise<{
        data: import("./docentes.entity").Docentes;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    deleteDocente(id: number, req: any): Promise<{
        data: import("./docentes.entity").Docentes;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
}
