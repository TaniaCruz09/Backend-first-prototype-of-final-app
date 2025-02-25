import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';
import { CreateCalificacionDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
import { Utilities } from '../../common/helpers/utilities';

@Controller('calificaciones')
export class CalificacionesController {
  constructor(private readonly calificacionesService: CalificacionesService) {}

  @Post()
    async createCalificaciones(@Body() payload: CreateCalificacionDto) {
      try {
        const nuevaCalificacion = await this.calificacionesService.create(payload)
        const data = {
          data: nuevaCalificacion,
          message: 'Calificación creada correctamente',
      }
      return data;
      } catch (error) {
        Utilities.catchError(error)
      }
    }

  @Get()
    async findAllCalificaciones() {
      try {
        const calificaciones = await this.calificacionesService.findAll();
        const data = {
          data: calificaciones,
          message: 'ok'
        }
        return data;
      } catch (error) {
        Utilities.catchError(error)
      }
    }

  @Get(':id')
    async findOneByIdCalificaciones(@Param('id', ParseIntPipe) id: number) {
      try {
        const calificaciones = await this.calificacionesService.findOne(id);
        const data = {
          data: calificaciones,
          message: 'ok'
        }
        return data;
      } catch (error) {
        Utilities.catchError(error)
      }
    }

  @Put(':id')
    async update(@Param('id') id: number, @Body() payload: UpdateCalificacioneDto) {
      try {
        const calificiones = await this.calificacionesService.update(id, payload);
        const data = {
          data: calificiones,
          message: 'Calificación actualizada correctamente'
        }
        return data;
      } catch (error) {
        Utilities.catchError(error)
      }
    }

  @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
      try {
        const calificaciones = await this.calificacionesService.remove(id)
        const data = {
          data: calificaciones,
          message: "Calificación eliminada correctamente"
        }
        return data;
      } catch (error) {
        Utilities.catchError(error)
      }
    }
}
