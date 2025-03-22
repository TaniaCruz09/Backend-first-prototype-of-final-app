import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from "@nestjs/common";
import { GenderService } from "../services/gender.service";
import { GenderDto } from "../dtos/gender.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Utilities } from "src/common/helpers/utilities";
import { JwtAuthGuard } from "src/module/auth/guards/jwt.guard";


@ApiTags('Gender')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('gender')

export class GenderController {
    constructor(private readonly genderService: GenderService) { }

    @Post('/')
    async createGrades(@Body() payload: GenderDto, @Req() req) {
        try {
            const userId = req.user?.id; // Obtener el ID del usuario autenticado

            if (!userId) {
                return {
                    message: "Usuario no autenticado",
                    statusCode: 401
                };
            }

            // Agregar el user_update_id al payload
            payload.user_create_id = userId;

            const newGender = await this.genderService.created(payload);
            const data = {
                data: newGender,
                message: 'created',
            }
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Get('/')
    async getGender() {
        try {
            const gender = await this.genderService.getGender();
            const data = {
                data: gender,
                message: 'ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Get('/:id')
    async getGenderById(@Param('id', ParseIntPipe) id: number) {
        try {
            const gender = await this.genderService.getGenderById(id);
            const data = {
                data: gender,
                message: 'all ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Put('/:id')
    async updateGender(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: GenderDto,
        @Req() req

    ) {
        try {

            const userId = req.user?.id; // Obtener el ID del usuario autenticado

            if (!userId) {
                return {
                    message: "Usuario no autenticado",
                    statusCode: 401
                };
            }

            // Agregar el user_update_id al payload
            payload.user_update_id = userId;
            const gender = await this.genderService.updateGender(id, payload);
            const data = {
                data: gender,
            }
            return data;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    @Delete('/:id')
    async deleteGender(
        @Param('id', ParseIntPipe) id: number,
        @Req() req
    
    ) {
        try {
        const userId = req.user?.id; // Obtener el ID del usuario autenticado

      if (!userId) {
        return {
          message: "Usuario no autenticado",
          statusCode: 401
        };
      }

            const gender = await this.genderService.deleteGender(id,userId);
            return {
                data: gender,
                message: 'Profession marked as deleted',
              };
        } catch (error) {
            Utilities.catchError(error)
        }
    }
}