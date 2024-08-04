import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { AcademicLevelEntity } from "../entities/academiclevel.entity";
import { AcademicLevelDto } from "../dtos/academiclevel.dto";


@Injectable()
export class AcademicLevelService{
    constructor(
        @InjectRepository(AcademicLevelEntity)
        private readonly AcademicLevelRepo: Repository<AcademicLevelEntity>,
    ){}

    async created(payload: AcademicLevelDto){
        const academicLevel = await this.AcademicLevelRepo.create(payload);
        return await this.AcademicLevelRepo.save(academicLevel);

    }

    async getAcademicLevel(){
        const academicLevel = await this.AcademicLevelRepo.find();
        console.log(academicLevel)
        return academicLevel;
    }

    async getAcademicLevelById(id: number): Promise <AcademicLevelEntity> {
        const academicLevel = await this.AcademicLevelRepo.findOne({
            where: {id},
        });
        return academicLevel;
    }

    async updateAcademicLevel(id:number, payload: AcademicLevelDto): Promise <AcademicLevelEntity> {
        const academicLevel = await this.AcademicLevelRepo.preload({id, ...payload});
        return await this.AcademicLevelRepo.save(academicLevel)
    }

    async deleteAcademicLevel(id: number): Promise<AcademicLevelEntity> {
        const academicLevel = await this.AcademicLevelRepo.findOne({
            where: {id: id}
        })
        return await this.AcademicLevelRepo.remove(academicLevel);
    }
}