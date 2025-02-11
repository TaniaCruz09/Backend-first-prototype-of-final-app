import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { TurnoService } from '../services/turnos.service';
import { createTurnoDto } from '../dtos/turnos.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';

@ApiTags('Turno')
@ApiBearerAuth()
@Controller('turno')
export class TurnoController {
  constructor(private readonly turnoService: TurnoService) {}

  @Get('/')
  async findAll() {
    try{
      const turno = await this.turnoService.findAll();
      const data = {
        data: turno,
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
      const turno = await this.turnoService.findOne(id);
      const data = {
        data: turno,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Post('/')
  async create(@Body() payload: createTurnoDto){
    try{
      const turno = await this.turnoService.create(payload);
      const data = {
        data: turno,
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
    @Body() payload: createTurnoDto,
  ){
    try{
      const turno = await this.turnoService.update(id, payload);
      const data = {
        data: turno,
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
      const turno = await this.turnoService.delete(id);
      const data = {
        data: turno,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}