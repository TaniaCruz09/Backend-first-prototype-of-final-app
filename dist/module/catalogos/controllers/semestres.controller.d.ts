import { SemestreDto } from "../dtos/semestres.dto";
import { SemestreService } from "../services/semestre.service";
export declare class SemestreController {
    private readonly SemestreService;
    constructor(SemestreService: SemestreService);
    createdSemestre(payload: SemestreDto, req: any): Promise<{
        data: import("..").SemestreEntity;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    getSemestres(): Promise<{
        data: import("..").SemestreEntity[];
        message: string;
    }>;
    getSemestreById(id: number): Promise<{
        data: import("..").SemestreEntity;
        message: string;
    }>;
    update(id: number, payload: SemestreDto, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("..").SemestreEntity;
        message: string;
        statusCode?: undefined;
    }>;
    deleteSemestre(id: number, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("..").SemestreEntity;
        message: string;
        statusCode?: undefined;
    }>;
}
