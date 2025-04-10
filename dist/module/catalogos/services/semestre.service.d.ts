import { SemestreDto } from "../dtos/semestres.dto";
import { Repository } from "typeorm";
import { SemestreEntity } from "../entities/semestres.entity";
export declare class SemestreService {
    private readonly SemestreRepo;
    constructor(SemestreRepo: Repository<SemestreEntity>);
    created(payload: SemestreDto): Promise<SemestreEntity>;
    getSemestres(): Promise<SemestreEntity[]>;
    getSemestreById(id: number): Promise<SemestreEntity>;
    updateSemestre(id: number, payload: SemestreDto): Promise<SemestreEntity>;
    deleteSemestre(id: number, userId: number): Promise<SemestreEntity>;
}
