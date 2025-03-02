import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { StudentEntity } from "./students.entity";
import { StudentsDto } from "./student.dto";
import { Utilities } from "../../common/helpers/utilities";


@Injectable()
export class StudentService{
    constructor(
        @InjectRepository(StudentEntity)
        private readonly StudentRepo: Repository<StudentEntity>,
    ){}

    async created(payload: StudentsDto):Promise<StudentEntity>{ 
        try {
            const student = await this.StudentRepo.create(payload);
            return await this.StudentRepo.save(student);
        } catch (error) {
            Utilities.catchError(error)
        }

    }
    async getStudent():Promise<StudentEntity[]>{
        try {
            return await this.StudentRepo.find({
                relations: ['pais','gender','departamento','municipio']    
            });
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    async getStudentById(id: number): Promise <StudentEntity> {
        try {
            const student = await this.StudentRepo.findOne({
                where: {id},
                relations: ['pais','gender','departamento','municipio']  
            });
            return student;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    async updateStudent(id:number, payload: StudentsDto): Promise <StudentEntity> {
        try {
            const student = await this.StudentRepo.preload({id, ...payload});
            return await this.StudentRepo.save(student)
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    async deleteStudent(id: number): Promise<StudentEntity> {
        try {
            const student = await this.StudentRepo.findOne({
                where: {id: id}
            })
            return await this.StudentRepo.remove(student);
        } catch (error) {
            Utilities.catchError(error)
        }
    }
}