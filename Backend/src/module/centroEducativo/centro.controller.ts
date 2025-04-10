import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { CreateCentroDto } from './dto/create-centro.dto';
import { UpdateCentroDto } from './dto/update-centro.dto';
import { CentroService } from './centro.service';
import { Utilities } from '../../common/helpers/utilities';

@Controller('centro') 
export class CentroController {
  constructor(private readonly centroService: CentroService) {}

  @Post()
  async create(@Body() createCentroDto: CreateCentroDto) {
    try {
      const centro = await this.centroService.createCentro (createCentroDto);
      const data = {
        data: centro,
        message: 'Centro creado correctamente'
      }
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  @Get()
  async findAll() {
    try {
      const centro = await this.centroService.getCentro();
      const data = {
        data: centro,
        message: 'ok'
      }
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const centro = await this.centroService.getCentroById(id);
      const data = {
        data: centro,
        message: 'ok'
      }
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() payload: UpdateCentroDto) {
    try {
      const centro = await this.centroService.updateCentro(id, payload);
      const data = {
        data: centro,
        message: 'Centro actualizado correctamente'
      }
      return data; 
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const centro = await this.centroService.deleteCentro (id); 
      const data = {
        data: centro,
        message: 'Centro eliminado correctamente'
      }
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }
}
