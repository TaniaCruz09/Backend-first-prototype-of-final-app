import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TurnoService } from '../services/turnos.service';
import { createTurnoDto } from '../dtos/turnos.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';
import { JwtAuthGuard } from '../../../module/auth/guards/jwt.guard';

@ApiTags('Turno')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('turno')
export class TurnoController {
  constructor(private readonly turnoService: TurnoService) {}

  @Get('/')
  async findAll() {
    try {
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
    try {
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
  async create(@Body() payload: createTurnoDto, @Req() req) {
    try {
      const userId = req.user?.id; // Obtener el ID del usuario autenticado

      if (!userId) {
        return {
          message: 'Usuario no autenticado',
          statusCode: 401,
        };
      }

      // Agregar el user_update_id al payload
      payload.user_create_id = userId;

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
    @Req() req, // Capturar el usuario autenticado
  ) {
    try {
      const userId = req.user?.id; // Obtener el ID del usuario autenticado

      if (!userId) {
        return {
          message: 'Usuario no autenticado',
          statusCode: 401,
        };
      }

      // Agregar el user_update_id al payload
      payload.user_update_id = userId;

      const turno = await this.turnoService.update(id, payload);
      const data = {
        data: turno,
        message: 'Turno actualizado correctamente',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
    try {
      const userId = req.user?.id; // Obtener el ID del usuario autenticado

      if (!userId) {
        return {
          message: 'Usuario no autenticado',
          statusCode: 401,
        };
      }
      const turno = await this.turnoService.delete(id, userId);
      const data = {
        data: turno,
        message: 'Turno eliminado correctamente',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}
