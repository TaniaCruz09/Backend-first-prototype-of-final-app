import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ModalidadService } from '../services/modalidad.service';
import { createModalidadDto } from '../dtos/modalidad.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';

@ApiTags('Modalidad')
@ApiBearerAuth()
@Controller('modalidad')
export class ModalidadController {
  constructor(private readonly modalidadService: ModalidadService) {}

  @Get('/')
  async findAll() {
    try {
      const modalidad = await this.modalidadService.findAll();
      const data = {
        data: modalidad,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const modalidad = await this.modalidadService.findOne(id);
      const data = {
        data: modalidad,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Post('/')
  async create(@Body() payload: createModalidadDto){
    try {
      const modalidad = await this.modalidadService.create(payload);
      const data = {
        data: modalidad,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() payload: createModalidadDto,
  ){
    try{
      const modalidad = await this.modalidadService.update(id, payload);
      const data = {
        data: modalidad,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      const modalidad = await this.modalidadService.delete(id);
      const data = {
        data: modalidad,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}