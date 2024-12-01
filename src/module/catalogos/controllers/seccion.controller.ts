import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { CreateSeccionDTO } from '../dtos/seccion.dto';
import { SeccionService } from '../services/seccion.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Seccion')
@ApiBearerAuth()
@Controller('seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Get('/')
  async findAll() {
    const seccion = await this.seccionService.findAll();
    const data = {
      data: seccion,
      message: 'ok',
    };
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const seccion = await this.seccionService.findOne(id);
    const data = {
      data: seccion,
      message: 'ok',
    };
    return data;
  }

  @Post('/')
  async create(@Body() payload: CreateSeccionDTO){
    const seccion = await this.seccionService.create(payload);
    const data = {
      data: seccion,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() payload: CreateSeccionDTO,
  ){
    const seccion = await this.seccionService.update(id, payload);
    const data = {
      data: seccion,
      message: 'ok',
    };
    return data;
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const seccion = await this.seccionService.delete(id);
    const data = {
      data: seccion,
      message: 'ok',
    };
    return data;
  }
}
