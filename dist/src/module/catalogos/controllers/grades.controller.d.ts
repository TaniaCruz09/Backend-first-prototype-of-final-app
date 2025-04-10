import { GradesService } from "../services/grades.service";
import { GradesDto } from "../dtos/grades.dto";
export declare class GradesController {
    private readonly gradesService;
    constructor(gradesService: GradesService);
    createGrades(payload: GradesDto): Promise<{
        data: import("..").GradesEntity;
        message: string;
    }>;
    getGrades(): Promise<{
        data: import("..").GradesEntity[];
        message: string;
    }>;
    getGradesById(id: number): Promise<{
        data: import("..").GradesEntity;
        message: string;
    }>;
    updateGrades(id: number, payload: GradesDto): Promise<{
        data: import("..").GradesEntity;
    }>;
    deleteGrades(id: number): Promise<{
        data: import("..").GradesEntity;
        message: string;
    }>;
}
