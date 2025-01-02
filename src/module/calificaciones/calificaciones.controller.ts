import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';
import { CreateCalificacionDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';

@Controller('calificaciones')
export class CalificacionesController {
  constructor(private readonly calificacionesService: CalificacionesService) {}

  @Post()
    async createCalificaciones(@Body() payload: CreateCalificacionDto) {
      const nuevaCalificacion = await this.calificacionesService.create(payload)
      const data = {
        data: nuevaCalificacion,
        message: 'creado correctamente',
    }
    return data;
    }

  @Get()
    async findAllCalificaciones() {
      const calificaciones = await this.calificacionesService.findAll();
      const data = {
        data: calificaciones,
        message: 'todo bien'
      }
      return data;
    }

  @Get(':id')
    async findOneByIdCalificaciones(@Param('id', ParseIntPipe) id: number) {
      const calificaciones = await this.calificacionesService.findOne(id);
      const data = {
        data: calificaciones,
        message: 'todo bien'
      }
      return data;
    }

  @Put(':id')
    async update(@Param('id') id: number, @Body() payload: UpdateCalificacioneDto) {
      const calificiones = await this.calificacionesService.update(id, payload);
      const data = {
        data: calificiones,
        message: 'Calificacione actualizada correctamente'
      }
      return data;
    }

  @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
      const calificaciones = await this.calificacionesService.remove(id)
      const data = {
        data: calificaciones,
        message: "Calificacion agregada correctamente"
      }
      return data;
    }
}
