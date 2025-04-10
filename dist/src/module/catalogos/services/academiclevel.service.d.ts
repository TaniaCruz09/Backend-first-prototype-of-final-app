import { Repository } from "typeorm";
import { AcademicLevelDto } from "../dtos/academiclevel.dto";
import { AcademicLevelEntity } from "../entities/academiclevel.entity";
export declare class AcademicLevelService {
    private readonly AcademicLevelRepo;
    constructor(AcademicLevelRepo: Repository<AcademicLevelEntity>);
    created(payload: AcademicLevelDto): Promise<AcademicLevelEntity>;
    getAcademicLevel(): Promise<AcademicLevelEntity[]>;
    getAcademicLevelById(id: number): Promise<AcademicLevelEntity>;
    updateAcademicLevel(id: number, payload: AcademicLevelDto): Promise<AcademicLevelEntity>;
    deleteAcademicLevel(id: number, userId: number): Promise<AcademicLevelEntity>;
}
