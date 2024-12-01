import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { GradesService } from "../services/grades.service";
import { GradesDto } from "../dtos/grades.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Grades')
@ApiBearerAuth()
@Controller('grades')

export class GradesController{
    constructor (private readonly gradesService: GradesService){}

    @Post ('/')
    async createGrades(@Body() payload: GradesDto){
        const newGrades = await this.gradesService.created(payload);
        const data = {
            data: newGrades,
            message: 'created',
        }
        return data;
    }

    @Get('/')
    async getGrades(){ 
    const grades = await this.gradesService.getGrades();
    const data = {
        data : grades,
        message: 'ok',
    };
    return data;
    }

    @Get('/:id')
    async getGradesById(@Param('id', ParseIntPipe) id: number){
        const grades = await this.gradesService.getGradesById(id);

        const data = {
            data:grades,
            message: 'all ok',
        };
        return data;
    }

    @Put('/:id')
    async updateGrades(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: GradesDto,
    ){
        const grades= await this.gradesService.updateGrades(id, payload);
        const data = {
            data: grades,
        }
        return data;
    }

    @Delete('/:id')
    async deleteGrades(@Param('id',ParseIntPipe) id:number ) {
        const grades = await this.gradesService.deleteGrades(id);
        const data = {
            data: grades,
            message: 'grade deleted',
        };
        return data;
    }
}