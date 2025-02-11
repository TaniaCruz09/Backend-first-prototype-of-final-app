import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { GenderDto } from "../dtos/gender.dto";
import { GenderEntity } from "../entities/gender.entity";
import { Utilities } from "src/common/helpers/utilities";


@Injectable()
export class GenderService{
    constructor(
        @InjectRepository(GenderEntity)
        private readonly GenderRepo: Repository<GenderEntity>,
    ){}

    async created(payload: GenderDto){
        try{
            const gender = await this.GenderRepo.create(payload);
            return await this.GenderRepo.save(gender);
        }catch(error){
            Utilities.catchError(error)
          }

    }

    async getGender(){
        try{
            const gender = await this.GenderRepo.find();
            console.log(gender)
            return gender;
        }catch(error){
            Utilities.catchError(error)
          }
    }

    async getGenderById(id: number): Promise <GenderEntity> {
        try{
            const gender = await this.GenderRepo.findOne({
                where: {id},
            });
            return gender;
        }catch(error){
            Utilities.catchError(error)
          }
    }

    async updateGender(id:number, payload: GenderDto): Promise <GenderEntity> {
        try{
            const gender = await this.GenderRepo.preload({id, ...payload});
            return await this.GenderRepo.save(gender)
        }catch(error){
            Utilities.catchError(error)
          }
    }

    async deleteGender(id: number): Promise<GenderEntity> {
        try{
            const gender = await this.GenderRepo.findOne({
                where: {id: id}
            })
            return await this.GenderRepo.remove(gender);
        }catch(error){
            Utilities.catchError(error)
          }
    }
}