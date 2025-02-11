import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { GenderService } from "../services/gender.service";
import { GenderDto } from "../dtos/gender.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Utilities } from "src/common/helpers/utilities";


@ApiTags('Gender')
@ApiBearerAuth()
@Controller('gender')

export class GenderController{
    constructor (private readonly genderService: GenderService){}

    @Post ('/')
    async createGrades(@Body() payload: GenderDto){
        try{
            const newGender = await this.genderService.created(payload);
            const data = {
                data: newGender,
                message: 'created',
            }
            return data;
        }catch(error){
            Utilities.catchError(error)
          }
    }

    @Get('/')
    async getGender(){
        try{
            const gender = await this.genderService.getGender();
            const data = {
                data : gender,
                message: 'ok',
            };
            return data;
        }catch(error){
            Utilities.catchError(error)
          }
    }

    @Get('/:id')
    async getGenderById(@Param('id', ParseIntPipe) id: number){
        try{
            const gender = await this.genderService.getGenderById(id);
            const data = {
                data:gender,
                message: 'all ok',
            };
            return data;
        }catch(error){
            Utilities.catchError(error)
          }
    }

    @Put('/:id')
    async updateGender(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: GenderDto,
    ){
        try{
            const gender= await this.genderService.updateGender(id, payload);
            const data = {
                data: gender,
            }
            return data;
        }catch(error){
            Utilities.catchError(error)
          }
    }

    @Delete('/:id')
    async deleteGender(@Param('id',ParseIntPipe) id:number ) {
        try{
            const gender = await this.genderService.deleteGender(id);
            const data = {
                data: gender,
                message: 'gender deleted',
            };
            return data;
        }catch(error){
            Utilities.catchError(error)
          }
    }
}