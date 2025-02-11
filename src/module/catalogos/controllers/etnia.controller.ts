import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { EtniaService } from '../services/etnia.service';
import { createEtniaDto } from '../dtos/etnia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';

@ApiTags('Etnia')
@ApiBearerAuth()
@Controller('etnia')
export class EtniaController {
  constructor(private readonly etniaService: EtniaService) {}

  @Get('/')
  async findAll() {
    try {
      const etnia = await this.etniaService.findAll();
      const data = {
        data: etnia,
        message: 'ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try{
      const etnia = await this.etniaService.findOne(id);
      const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  } catch (error) {
    Utilities.catchError(error);
  }
}

  @Post('/')
  async create(@Body() payload: createEtniaDto){
    try{
      const etnia = await this.etniaService.create(payload);
      const data = {
      data: etnia,
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
    @Body() payload: createEtniaDto,
  ){
    try{
    const etnia = await this.etniaService.update(id, payload);
    const data = {
      data: etnia,
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
      const etnia = await this.etniaService.delete(id);
      const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  } catch (error) {
    Utilities.catchError(error);
  }
  }
}
