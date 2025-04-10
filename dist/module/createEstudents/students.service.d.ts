import { Repository } from "typeorm";
import { StudentEntity } from "./students.entity";
import { StudentsDto } from "./student.dto";
export declare class StudentService {
    private readonly StudentRepo;
    constructor(StudentRepo: Repository<StudentEntity>);
    created(payload: StudentsDto): Promise<StudentEntity>;
    getStudent(): Promise<StudentEntity[]>;
    getStudentById(id: number): Promise<StudentEntity>;
    updateStudent(id: number, payload: StudentsDto): Promise<StudentEntity>;
    deleteStudent(id: number, userId: number): Promise<StudentEntity>;
}
