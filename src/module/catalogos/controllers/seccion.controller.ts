import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { CreateSeccionDTO } from '../dtos/seccion.dto';
import { SeccionService } from '../services/seccion.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';

@ApiTags('Seccion')
@ApiBearerAuth()
@Controller('seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Get('/')
  async findAll() {
    try{
      const seccion = await this.seccionService.findAll();
      const data = {
        data: seccion,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try{
      const seccion = await this.seccionService.findOne(id);
      const data = {
        data: seccion,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Post('/')
  async create(@Body() payload: CreateSeccionDTO){
    try{
      const seccion = await this.seccionService.create(payload);
      const data = {
        data: seccion,
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
    @Body() payload: CreateSeccionDTO,
  ){
    try{
      const seccion = await this.seccionService.update(id, payload);
      const data = {
        data: seccion,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try{
      const seccion = await this.seccionService.delete(id);
      const data = {
        data: seccion,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}
