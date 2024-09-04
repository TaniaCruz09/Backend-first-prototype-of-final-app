import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { StudentEntity } from "./students.entity";
import { StudentsDto } from "./student.dto";


@Injectable()
export class StudentService{
    constructor(
        @InjectRepository(StudentEntity)
        private readonly StudentRepo: Repository<StudentEntity>,
    ){}

    async created(payload: StudentsDto):Promise<StudentEntity>{
        const student = await this.StudentRepo.create(payload);
        return await this.StudentRepo.save(student);

    }
    async getStudent():Promise<StudentEntity[]>{
        return await this.StudentRepo.find({
            relations: ['pais','gender']    
        });
    }

    async getStudentById(id: number): Promise <StudentEntity> {
        const student = await this.StudentRepo.findOne({
            where: {id},
            relations: ['pais','gender']  
        });
        if (!student) {
            throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
          }
        return student;
    }

    async updateStudent(id:number, payload: StudentsDto): Promise <StudentEntity> {
        const student = await this.StudentRepo.preload({id, ...payload});
        return await this.StudentRepo.save(student)
    }

    async deleteStudent(id: number): Promise<StudentEntity> {
        const student = await this.StudentRepo.findOne({
            where: {id: id}
        })
        return await this.StudentRepo.remove(student);
    }
}