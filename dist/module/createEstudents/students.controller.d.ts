import { StudentsDto } from "./student.dto";
import { StudentService } from "./students.service";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    createStudent(payload: StudentsDto, req: any): Promise<{
        data: import("./students.entity").StudentEntity;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    getStudent(): Promise<{
        data: import("./students.entity").StudentEntity[];
        message: string;
    }>;
    getStudentById(id: number): Promise<{
        data: import("./students.entity").StudentEntity;
        message: string;
    }>;
    updateStudent(id: number, payload: StudentsDto, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("./students.entity").StudentEntity;
        message: string;
        statusCode?: undefined;
    }>;
    deleteStudent(id: number, req: any): Promise<{
        message: string;
        statusCode: number;
        data?: undefined;
    } | {
        data: import("./students.entity").StudentEntity;
        message: string;
        statusCode?: undefined;
    }>;
}
