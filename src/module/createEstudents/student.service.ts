/*import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { StudentEntity } from "./students.entity";
import { StudentsDto } from "./student.dto";


@Injectable()
export class StudentService{
    constructor(
        @InjectRepository(StudentEntity)
        private readonly GenderRepo: Repository<StudentEntity>,
    ){}

    async created(payload: StudentsDto){
        const gender = await this.GenderRepo.create(payload);
        return await this.GenderRepo.save(gender);

    }

    async getGender(){
        const gender = await this.GenderRepo.find();
        console.log(gender)
        return gender;
    }

    async getGenderById(id: number): Promise <StudentEntity> {
        const gender = await this.GenderRepo.findOne({
            where: {id},
        });
        return gender;
    }

    async updateGender(id:number, payload: StudentsDto): Promise <StudentEntity> {
        const gender = await this.GenderRepo.preload({id, ...payload});
        return await this.GenderRepo.save(gender)
    }

    async deleteGender(id: number): Promise<StudentEntity> {
        const gender = await this.GenderRepo.findOne({
            where: {id: id}
        })
        return await this.GenderRepo.remove(gender);
    }
}
    */