import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { StudentsDto } from "./student.dto";
import { StudentService } from "./students.service";
import { Utilities } from "../../common/helpers/utilities";



@Controller('student')
export class StudentController{
    constructor (private readonly studentService: StudentService){}

    @Post ('/')
    async createStudent(@Body() payload: StudentsDto){
        try {
            const newStudent = await this.studentService.created(payload);
            const data = {
                data: newStudent,
                message: 'Estudiante agregado correctamente',
            }
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Get('/')
    async getStudent(){ 
        try {
            const student = await this.studentService.getStudent();
            const data = {
                data : student,
                message: 'ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Get('/:id')
    async getStudentById(@Param('id', ParseIntPipe) id: number){
        try {
            const student = await this.studentService.getStudentById(id);
            const data = {
                data:student,
                message: 'ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Put('/:id')
    async updateStudent( 
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: StudentsDto,
    ){ 
        try {
            const student= await this.studentService.updateStudent(id, payload);
            const data = {
                data: student,
                message: 'Estudiante actualizado correctamente',
            }
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Delete('/:id')
    async deleteStudent(@Param('id',ParseIntPipe) id:number ) { 
        try {
            const student = await this.studentService.deleteStudent(id);
            const data = {
                data: student,
                message: 'Estudiante eliminado correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }
}