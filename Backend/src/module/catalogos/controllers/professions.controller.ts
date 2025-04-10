import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProfessionsService } from '../services/professions.service';
import { ProfessionsDto } from '../dtos/professions.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';
import { JwtAuthGuard } from 'src/module/auth/guards/jwt.guard';

@ApiTags('Profession')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('profession')
export class ProfessionsController {
  constructor(private readonly professionsService: ProfessionsService) {}

  @Post('/')
  async createdProfessions(@Body() payload: ProfessionsDto, @Req() req) {
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

      const newProfessions = await this.professionsService.created(payload);
      const data = {
        data: newProfessions,
        message: 'created',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Get('/')
  async getProfessions() {
    try {
      const profession = await this.professionsService.getProfessions();
      const data = {
        data: profession,
        message: 'Ok',
      };

      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  @Get('/:id')
  async getProfessionsById(@Param('id', ParseIntPipe) id: number) {
    try {
      const profession = await this.professionsService.getProfessionsById(id);

      const data = {
        data: profession,
        message: 'Ok',
      };

      return data;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  /* @Put('/:id')
      async update(
          @Param('id', ParseIntPipe) id: number, 
          @Body() payload: ProfessionsDto,
      ){
          try {
              const profesion = await this.professionsService.updateProfession(id, payload);
              const data = {
              data: profesion,
              message: 'profesion actualizado correctamente',
              };
              return data;
          } catch (error) {
              Utilities.catchError (error)
          }
      }*/
  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ProfessionsDto,
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

      const profesion = await this.professionsService.updateProfession(
        id,
        payload,
      );
      return {
        data: profesion,
        message: 'Profesión actualizada correctamente',
      };
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  /* @Delete('/:id')
  async deleteProfession(@Param('id', ParseIntPipe) id: number) {
    try {

      const profession = await this.professionsService.deleteProfession(id);

      const data = {
        data: profession,
        message: 'Profession deleted',
      };

      return data;
    } catch (error) {
      Utilities.catchError(error)
    }
  }*/

  @Delete('/:id')
  async deleteProfession(@Param('id', ParseIntPipe) id: number, @Req() req) {
    try {
      const userId = req.user?.id; // Obtener el ID del usuario autenticado

      if (!userId) {
        return {
          message: 'Usuario no autenticado',
          statusCode: 401,
        };
      }
      const profession = await this.professionsService.deleteProfession(
        id,
        userId,
      );

      return {
        data: profession,
        message: 'Profession marked as deleted',
      };
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}
