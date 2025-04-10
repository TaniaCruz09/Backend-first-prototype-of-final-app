import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateGrupoConEstudiantesDto } from '../dtos/gruposConEstudiantes.dto';
import { Utilities } from 'src/common/helpers/utilities';
import { UpdateGrupoConEstudiantesDto } from '../dtos/updateGruposConEstudiantes.dto';
import { GruposConEstudiantesService } from '../services/gruposConEstudiantes.service';

@ApiTags('GruposConEstudiantes')
@ApiBearerAuth()
@Controller('gruposConEstudiantes')
export class GruposConEstudiantesController {
    constructor(private readonly grupoService: GruposConEstudiantesService) {}

    @Post()
    async createGrupo(@Body() createGrupoDto: CreateGrupoConEstudiantesDto){
        try{
            const grupos = await this.grupoService.createGrupo(createGrupoDto);
            const data = {
                data: grupos,
                message: 'Grupo agregado correctamente ',
              };
          
              return data;
        }catch(error){
            Utilities.catchError(error)
        }
    }

    @Get('/')
    async getgrupos(){
        try{
            const grupos = await this.grupoService.getGrupo();
            const data = {
                data: grupos,
                message: 'ok',
              };
          
              return data;
        }catch(error){
            Utilities.catchError(error)
        }
    }

    @Get('/:id')
    async getGruposById(@Param('id', ParseIntPipe) id: number){
        try{
        const grupo = await this.grupoService.getGrupoById(id);
        const data = {
            data: grupo,
            message: 'ok',
          };
      
          return data;
        }catch(error){
            Utilities.catchError(error)
        }
    }

    @Delete('/:id')
    async deleteGrupo(@Param('id') id: number){
        try{
            const grupo = await this.grupoService.deleteGrupos(id);
            const data = {
                data: grupo,
                message: 'ok',
              };
          
              return data;
        }catch(error){
            Utilities.catchError(error)
        }
    }

    @Put('/:id')
    async updateGrupo(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateGrupoConEstudiantesDto
    ){
        const grupo = await this.grupoService.updateGrupos(id, payload);
        const data = {
            data: grupo,
            message: 'Grupo actualizado correctamente',
          };
      
          return data;
    }
}
