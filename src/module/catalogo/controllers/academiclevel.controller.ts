import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AcademicLevelService } from "./academiclevel.service";
import { AcademicLevelDto } from "./academiclevel.dto";



@Controller('academiclevel')

export class AcademicLevelController{
    constructor (private readonly academicLevelService: AcademicLevelService){}

    @Post ('/')
    async createGrades(@Body() payload: AcademicLevelDto){
        const newAcademicLevel = await this.academicLevelService.created(payload);
        const data = {
            data: newAcademicLevel,
            message: 'created',
        }
        return data;
    }

    @Get('/')
    async getAcademicLevel(){ 
    const academicLevel = await this.academicLevelService.getAcademicLevel();
    const data = {
        data : academicLevel,
        message: 'ok',
    };
    return data;
    }

    @Get('/:id')
    async getAcademicLevelById(@Param('id', ParseIntPipe) id: number){
        const academicLevel = await this.academicLevelService.getAcademicLevelById(id);

        const data = {
            data:academicLevel,
            message: 'all ok',
        };
        return data;
    }

    @Put('/:id')
    async updateAcademicLevel(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: AcademicLevelDto,
    ){
        const academicLevel= await this.academicLevelService.updateAcademicLevel(id, payload);
        const data = {
            data: academicLevel,
        }
        return data;
    }

    @Delete('/:id')
    async deleteAcademicLevel(@Param('id',ParseIntPipe) id:number ) {
        const academicLevel = await this.academicLevelService.deleteAcademicLevel(id);
        const data = {
            data: academicLevel,
            message: 'Academic Level deleted',
        };
        return data;
    }
}