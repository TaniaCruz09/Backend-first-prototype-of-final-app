import { Repository } from 'typeorm';
import { ProfessionsDto } from '../dtos/professions.dto';
import { ProfessionsEntity } from '../entities/professions.entity';
export declare class ProfessionsService {
    private readonly ProfessionsRepo;
    constructor(ProfessionsRepo: Repository<ProfessionsEntity>);
    created(payload: ProfessionsDto): Promise<ProfessionsEntity>;
    getProfessions(): Promise<ProfessionsEntity[]>;
    getProfessionsById(id: number): Promise<ProfessionsEntity>;
    updateProfession(id: number, payload: ProfessionsDto): Promise<ProfessionsEntity>;
    deleteProfession(id: number, userId: number): Promise<ProfessionsEntity>;
}
