import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { AcademicLevelService } from "../services/academiclevel.service";
import { AcademicLevelDto } from "../dtos/academiclevel.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@ApiTags('catalogo/academiclevel')
@ApiBearerAuth()
@Controller('catalogo')
export class AcademicLevelController{
    constructor (private readonly academicLevelService: AcademicLevelService){}

    @Post ('/academiclevel')
    async createAcademicLevel(@Body() payload: AcademicLevelDto){
        try {
            const newAcademicLevel = await this.academicLevelService.created(payload);
            const data = {
                data: newAcademicLevel,
                message: 'creado correctamente',
            };
            return data;
        }catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'No se pudo crear el nivel académico',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Get('/academiclevel')
    async getAcademicLevel(){ 
        try {
            const academicLevel = await this.academicLevelService.getAcademicLevel();
            const data = {
                data : academicLevel,
                message: 'ok',
            };
            return data;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'No se pudieron obtener los niveles académicos',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    
    @Get('/academiclevel/:id')
    async getAcademicLevelById(@Param('id', ParseIntPipe) id: number){
        try {
            const academicLevel = await this.academicLevelService.getAcademicLevelById(id);
            if (!academicLevel) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'Nivel académico no encontrado',
                    },
                    HttpStatus.NOT_FOUND
                );
            }
            const data = {
                data:academicLevel,
                message: 'Nivel Academico encontrado',
            };
            return data;
        } catch (error) {
            throw new HttpException(
                {
                    status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
                    error: error.response?.error || 'No se pudo obtener el nivel académico',
                },
                error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        
    }

    @Put('/academiclevel/:id')
    async updateAcademicLevel(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: AcademicLevelDto,
    ) {
        try {
            const academicLevel = await this.academicLevelService.updateAcademicLevel(id, payload);
            if (!academicLevel) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'Nivel académico no encontrado',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }
            const data = {
                data: academicLevel,
                message: 'ok',
            };
            return data;
        } catch (error) {
            throw new HttpException(
                {
                    status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
                    error: error.response?.error || 'No se pudo actualizar el nivel académico',
                },
                error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Delete('/academiclevel/:id')
    async deleteAcademicLevel(@Param('id', ParseIntPipe) id: number) {
        try {
            const academicLevel = await this.academicLevelService.deleteAcademicLevel(id);
            if (!academicLevel) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'Nivel académico no encontrado',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }
            const data = {
                data: academicLevel,
                message: 'Etnia eliminado',
            };
            return data;
        } catch (error) {
            throw new HttpException(
                {
                    status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
                    error: error.response?.error || 'No se pudo eliminar el nivel académico',
                },
                error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}