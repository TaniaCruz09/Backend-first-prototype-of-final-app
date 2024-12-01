import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { StudentsDto } from "./student.dto";
import { StudentService } from "./students.service";



@Controller('student')
export class StudentController{
    constructor (private readonly studentService: StudentService){}

    @Post ('/')
    async createStudent(@Body() payload: StudentsDto){
        const newStudent = await this.studentService.created(payload);
        const data = {
            data: newStudent,
            message: 'created',
        }
        return data;
    }

    @Get('/')
    async getStudent(){ 
    const student = await this.studentService.getStudent();
    const data = {
        data : student,
        message: 'ok',
    };
    return data;
    }

    @Get('/:id')
    async getStudentById(@Param('id', ParseIntPipe) id: number){
        const student = await this.studentService.getStudentById(id);

        const data = {
            data:student,
            message: 'all ok',
        };
        return data;
    }

    @Put('/:id')
    async updateStudent(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: StudentsDto,
    ){
        const student= await this.studentService.updateStudent(id, payload);
        const data = {
            data: student,
        }
        return data;
    }

    @Delete('/:id')
    async deleteStudent(@Param('id',ParseIntPipe) id:number ) {
        const student = await this.studentService.deleteStudent(id);
        const data = {
            data: student,
            message: 'student deleted',
        };
        return data;
    }
}