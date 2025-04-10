import { Repository } from "typeorm";
import { GradesDto } from "../dtos/grades.dto";
import { GradesEntity } from "../entities/grades.entity";
export declare class GradesService {
    private readonly GradesRepo;
    constructor(GradesRepo: Repository<GradesEntity>);
    created(payload: GradesDto): Promise<GradesEntity>;
    getGrades(): Promise<GradesEntity[]>;
    getGradesById(id: number): Promise<GradesEntity>;
    updateGrades(id: number, payload: GradesDto): Promise<GradesEntity>;
    deleteGrades(id: number): Promise<GradesEntity>;
}
