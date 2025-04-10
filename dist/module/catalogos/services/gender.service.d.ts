import { Repository } from "typeorm";
import { GenderDto } from "../dtos/gender.dto";
import { GenderEntity } from "../entities/gender.entity";
export declare class GenderService {
    private readonly GenderRepo;
    constructor(GenderRepo: Repository<GenderEntity>);
    created(payload: GenderDto): Promise<GenderEntity>;
    getGender(): Promise<GenderEntity[]>;
    getGenderById(id: number): Promise<GenderEntity>;
    updateGender(id: number, payload: GenderDto): Promise<GenderEntity>;
    deleteGender(id: number, userId: number): Promise<GenderEntity>;
}
