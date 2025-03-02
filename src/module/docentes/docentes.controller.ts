import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesDTO } from './docentes.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../common/helpers/utilities';

@ApiTags('Docentes')
@ApiBearerAuth()
@Controller('docentes')
export class DocenteController {
  constructor(private readonly registroService: DocentesService) {}

  @Post()
  async createDocente(@Body() createDocenteDto: DocentesDTO) {
    try {
      const docente = await this.registroService.createDocente(createDocenteDto);
      const data = {
        data: docente,
        message: 'Docente agregado correctamente ',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  } 

  @Get('/')
  async getDocente() {
    try {
      const docente = await this.registroService.getDocente();
      const data = {
        data: docente,
        message: 'Ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  @Get('/:id')
  async getDocenteById(@Param('id', ParseIntPipe) id: number) {
    try {
      const docente = await this.registroService.getDocenteById(id);
      const data = {
        data: docente,
        message: 'Ok',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  @Delete('/:id')
  async deleteDocente(@Param('id') id: number) {
    try {
      const docente = await this.registroService.deleteDocente(id);
      const data = {
        data: docente,
        message: 'Docente eliminado correctamente',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  @Put('/:id')
  async editarDocente(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: DocentesDTO,
  ) {
    try {
      const docente = await this.registroService.editDocente(id, payload);
      const data = {
        data: docente,
        message: 'Docente actualizado correctamente',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }
}