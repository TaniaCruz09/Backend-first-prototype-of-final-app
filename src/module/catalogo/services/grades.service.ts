import { Repository } from "typeorm";
import { GradesDto } from "../dtos/grades.dto";
import { GradesEntity } from "../entities/grades.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";


@Injectable()
export class GradesService{
    constructor(
        @InjectRepository(GradesEntity)
        private readonly GradesRepo: Repository<GradesEntity>,
    ){}

    async created(payload: GradesDto){
        const grades = await this.GradesRepo.create(payload);
        return await this.GradesRepo.save(grades);

    }

    async getGrades(){
        const grades = await this.GradesRepo.find();
        console.log(grades)
        return grades;
    }

    async getGradesById(id: number): Promise <GradesEntity> {
        const grades = await this.GradesRepo.findOne({
            where: {id},
        });
        return grades;
    }

    async updateGrades(id:number, payload: GradesDto): Promise <GradesEntity> {
        const grades = await this.GradesRepo.preload({id, ...payload});
        return await this.GradesRepo.save(grades)
    }

    async deleteGrades(id: number): Promise<GradesEntity> {
        const grades = await this.GradesRepo.findOne({
            where: {id: id}
        })
        return await this.GradesRepo.remove(grades);
    }
}