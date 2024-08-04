import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,} from "@nestjs/common";
import { ProfessionsService } from "../services/professions.service";
import { ProfessionsDto } from "../dtos/professions.dto";
    

@Controller('profession')

export class ProfessionsController{
    constructor(private readonly professionsService: ProfessionsService){}

    @Post('/')
    async createdProfessions(@Body() payload: ProfessionsDto) {
      const newProfessions = await this.professionsService.created(payload);
      const data = {
        data: newProfessions,
        message: 'created',
      };
      return data;
    }
   
    @Get('/')
    async getProfessions() {
    const profession = await this.professionsService.getProfessions();
    const data = {
      data: profession,
      message: 'Ok',
    };

    return data;
  }
  

  @Get('/:id')
  async getProfessionsById(@Param('id', ParseIntPipe) id: number) {
    const profession = await this.professionsService.getProfessionsById(id);

    const data = {
      data: profession,
      message: 'Ok',
    };

    return data;
  }

  @Put('/:id')
  async updateProfession(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ProfessionsDto,
  ) {
    const profession = await this.professionsService.updateProfession(id, payload);

    const data = {
      data: profession,
    };

    return data;
  }

  @Delete('/:id')
  async deleteProfession(@Param('id', ParseIntPipe) id: number) {
    const profession = await this.professionsService.deleteProfession(id);

    const data = {
      data: profession,
      message: 'Profession deleted',
    };

    return data;
  }



}