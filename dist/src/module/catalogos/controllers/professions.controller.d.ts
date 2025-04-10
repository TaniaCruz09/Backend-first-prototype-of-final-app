import { ProfessionsService } from '../services/professions.service';
import { ProfessionsDto } from '../dtos/professions.dto';
export declare class ProfessionsController {
    private readonly professionsService;
    constructor(professionsService: ProfessionsService);
    createdProfessions(payload: ProfessionsDto, req: any): Promise<{
        data: import("..").ProfessionsEntity;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    getProfessions(): Promise<{
        data: import("..").ProfessionsEntity[];
        message: string;
    }>;
    getProfessionsById(id: number): Promise<{
        data: import("..").ProfessionsEntity;
        message: string;
    }>;
    update(id: number, payload: ProfessionsDto, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("..").ProfessionsEntity;
        message: string;
        statusCode?: undefined;
    }>;
    deleteProfession(id: number, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("..").ProfessionsEntity;
        message: string;
        statusCode?: undefined;
    }>;
}
