import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TeacherEntity } from "../entity/teacher.entity";
import { Repository } from "typeorm";
import { RolesEntity } from "src/module/auth/entity/roles.entity";
import { TeacherDto } from "../dto/teacher.dto";



@Injectable()
export class TeacherService{
    constructor(
        @InjectRepository(TeacherEntity)
        private readonly teacherRepo: Repository<TeacherEntity>,
    ){}

    async created(payload: TeacherDto){
        const teacher = await this.teacherRepo.create(payload);
        return await this.teacherRepo.save(teacher);
    }
}