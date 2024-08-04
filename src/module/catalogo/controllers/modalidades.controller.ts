import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ModalidadService } from '../services/modalidad.service';
import { createModalidadDto } from '../dtos/modalidad.dto';



@Controller('modalidad')
export class ModalidadController {
  constructor(private readonly modalidadService: ModalidadService) {}

  @Get('/')
  async findAll() {
    const modalidad = await this.modalidadService.findAll();
    const data = {
      data: modalidad,
      message: 'ok',
    };
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const modalidad = await this.modalidadService.findOne(id);
    const data = {
      data: modalidad,
      message: 'ok',
    };
    return data;
  }

  @Post('/')
  async create(@Body() payload: createModalidadDto){
    const modalidad = await this.modalidadService.create(payload);
    const data = {
      data: modalidad,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() payload: createModalidadDto,
  ){
    const modalidad = await this.modalidadService.update(id, payload);
    const data = {
      data: modalidad,
      message: 'ok',
    };
    return data;
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const modalidad = await this.modalidadService.delete(id);
    const data = {
      data: modalidad,
      message: 'ok',
    };
    return data;
  }
}