import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { EtniaService } from '../services/etnia.service';
import { createEtniaDto } from '../dtos/etnia.dto';


@Controller('etnia')
export class EtniaController {
  constructor(private readonly etniaService: EtniaService) {}

  @Get('/')
  async findAll() {
    const etnia = await this.etniaService.findAll();
    const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const etnia = await this.etniaService.findOne(id);
    const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  }

  @Post('/')
  async create(@Body() payload: createEtniaDto){
    const etnia = await this.etniaService.create(payload);
    const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() payload: createEtniaDto,
  ){
    const etnia = await this.etniaService.update(id, payload);
    const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const etnia = await this.etniaService.delete(id);
    const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  }
}
