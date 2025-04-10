import { AcademicLevelService } from '../services/academiclevel.service';
import { AcademicLevelDto } from '../dtos/academiclevel.dto';
export declare class AcademicLevelController {
    private readonly academicLevelService;
    constructor(academicLevelService: AcademicLevelService);
    createAcademicLevel(payload: AcademicLevelDto, req: any): Promise<{
        data: import("..").AcademicLevelEntity;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    getAcademicLevel(): Promise<{
        data: import("..").AcademicLevelEntity[];
        message: string;
    }>;
    getAcademicLevelById(id: number): Promise<{
        data: import("..").AcademicLevelEntity;
        message: string;
    }>;
    updateAcademicLevel(id: number, payload: AcademicLevelDto, req: any): Promise<{
        data: import("..").AcademicLevelEntity;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    deleteAcademicLevel(id: number, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("..").AcademicLevelEntity;
        message: string;
        statusCode?: undefined;
    }>;
}
