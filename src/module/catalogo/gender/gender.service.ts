import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { GenderEntity } from "./gender.entity";
import { GenderDto } from "./gender.dto";


@Injectable()
export class GenderService{
    constructor(
        @InjectRepository(GenderEntity)
        private readonly GenderRepo: Repository<GenderEntity>,
    ){}

    async created(payload: GenderDto){
        const gender = await this.GenderRepo.create(payload);
        return await this.GenderRepo.save(gender);

    }

    async getGender(){
        const gender = await this.GenderRepo.find();
        console.log(gender)
        return gender;
    }

    async getGenderById(id: number): Promise <GenderEntity> {
        const gender = await this.GenderRepo.findOne({
            where: {id},
        });
        return gender;
    }

    async updateGender(id:number, payload: GenderDto): Promise <GenderEntity> {
        const gender = await this.GenderRepo.preload({id, ...payload});
        return await this.GenderRepo.save(gender)
    }

    async deleteGender(id: number): Promise<GenderEntity> {
        const gender = await this.GenderRepo.findOne({
            where: {id: id}
        })
        return await this.GenderRepo.remove(gender);
    }
}