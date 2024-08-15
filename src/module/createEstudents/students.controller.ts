/*import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { StudentService } from "./student.service";
import { StudentsDto } from "./student.dto";



@Controller('student')

export class StudentController{
    constructor (private readonly studentService: StudentService){}

    @Post ('/')
    async createGrades(@Body() payload: StudentsDto){
        const newGender = await this.studentService.created(payload);
        const data = {
            data: newGender,
            message: 'created',
        }
        return data;
    }

    @Get('/')
    async getGender(){ 
    const gender = await this.studentService.getGender();
    const data = {
        data : gender,
        message: 'ok',
    };
    return data;
    }

    @Get('/:id')
    async getGenderById(@Param('id', ParseIntPipe) id: number){
        const gender = await this.studentService.getGenderById(id);

        const data = {
            data:gender,
            message: 'all ok',
        };
        return data;
    }

    @Put('/:id')
    async updateGender(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: StudentsDto,
    ){
        const gender= await this.studentService.updateGender(id, payload);
        const data = {
            data: gender,
        }
        return data;
    }

    @Delete('/:id')
    async deleteGender(@Param('id',ParseIntPipe) id:number ) {
        const gender = await this.studentService.deleteGender(id);
        const data = {
            data: gender,
            message: 'gender deleted',
        };
        return data;
    }
}
    */