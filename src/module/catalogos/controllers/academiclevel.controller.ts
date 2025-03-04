import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AcademicLevelService } from "../services/academiclevel.service";
import { AcademicLevelDto } from "../dtos/academiclevel.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Utilities } from "src/common/helpers/utilities";


@ApiTags('academiclevel')
@ApiBearerAuth()
@Controller('academiclevel')
export class AcademicLevelController{
    constructor (private readonly academicLevelService: AcademicLevelService){}

    @Post ('/')
    async createAcademicLevel(@Body() payload: AcademicLevelDto){
        try {
            const newAcademicLevel = await this.academicLevelService.created(payload);
            const data = {
                data: newAcademicLevel,
                message: 'creado correctamente',
            };
            return data;
        }catch(error){
            Utilities.catchError(error)
        }
    }

    @Get('/')
    async getAcademicLevel(){ 
        try {
            const academicLevel = await this.academicLevelService.getAcademicLevel();
            const data = {
                data : academicLevel,
                message: 'ok',
            };
            return data;
        } catch(error){
            Utilities.catchError(error)
        }
    }

    
    @Get('/:id')
    async getAcademicLevelById(@Param('id', ParseIntPipe) id: number){
        try {
            const academicLevel = await this.academicLevelService.getAcademicLevelById(id);
            const data = {
                data:academicLevel,
                message: 'Nivel Academico encontrado',
            };
            return data;
        }catch(error){
            Utilities.catchError(error)
        }   
    }

    @Put('/:id')
    async updateAcademicLevel(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: AcademicLevelDto,
    ) {
        try {
            const academicLevel = await this.academicLevelService.updateAcademicLevel(id, payload);
            const data = {
                data: academicLevel,
                message: 'ok',
            };
            return data;
        } catch(error){
            Utilities.catchError(error)
        }
    }

    @Delete('/:id')
    async deleteAcademicLevel(@Param('id', ParseIntPipe) id: number) {
        try {
            const academicLevel = await this.academicLevelService.deleteAcademicLevel(id);
            const data = {
                data: academicLevel,
                message: 'Etnia eliminado',
            };
            return data;
        }catch(error){
            Utilities.catchError(error)
        }
    }
}