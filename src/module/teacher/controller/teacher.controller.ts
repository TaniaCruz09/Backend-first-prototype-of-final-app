import { Body, Controller, Post } from "@nestjs/common";
import { TeacherDto } from "../dto/teacher.dto";
import { TeacherService } from "../service/teacher.service";


@Controller('teacher')
export class TeacherController{
    constructor(private readonly teacherService: TeacherService){}

    @Post('/')
    async createdTeacher(@Body() payload:TeacherDto){
        const newTeacher = await this.teacherService.created(payload);
        const data = {
            data: newTeacher,
            message: 'created',
        };
        return data;
    }

}