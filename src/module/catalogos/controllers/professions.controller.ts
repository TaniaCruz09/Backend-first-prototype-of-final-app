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
} from "@nestjs/common";
import { ProfessionsService } from "../services/professions.service";
import { ProfessionsDto } from "../dtos/professions.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Utilities } from "../../../common/helpers/utilities";

@ApiTags('Profession')
@ApiBearerAuth()
@Controller('profession')

export class ProfessionsController {
  constructor(private readonly professionsService: ProfessionsService) { }

  @Post('/')
  async createdProfessions(@Body() payload: ProfessionsDto) {
    try {
      const newProfessions = await this.professionsService.created(payload);
      const data = {
        data: newProfessions,
        message: 'created',
      };
      return data;
    } catch (error) {
      Utilities.catchError(error)
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
      Utilities.catchError(error)
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
      Utilities.catchError(error)
    }
  }

  @Put('/:id')
  async updateProfession(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ProfessionsDto,
    @Req() req,  // <-- Capturar el usuario autenticado
  ) {
    try {
      const userId = req.user.id;  // <-- Obtener el ID del usuario que modifica

      const profession = await this.professionsService.updateProfession(id, payload);

      return { data: profession };
    } catch (error) {
      Utilities.catchError(error);
    }
  }


  @Delete('/:id')
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
  }

}