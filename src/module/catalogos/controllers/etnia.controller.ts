import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { EtniaService } from '../services/etnia.service';
import { createEtniaDto } from '../dtos/etnia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

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
                throw new HttpException(
                    {
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        error: 'No se pudieron obtener las etnias',
                    },
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try{
      const etnia = await this.etniaService.findOne(id);
    
    if(!etnia){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Etnia no encontrada',
      },
      HttpStatus.NOT_FOUND
      )
    }
    const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  }catch(error){
    throw new HttpException(
      {
          status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.response?.error || 'No se pudo obtener la etnia',
      },
      error.status || HttpStatus.INTERNAL_SERVER_ERROR,
  );
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
    }catch(error){
      throw new HttpException(
        {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'No se pudo crear la etnia',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
    );
    }
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() payload: createEtniaDto,
  ){
    try{
      const etnia = await this.etniaService.update(id, payload);
      if (!etnia) {
        throw new HttpException(
            {
                status: HttpStatus.NOT_FOUND,
                error: 'Etnia no encontrada',
            },
            HttpStatus.NOT_FOUND,
        );
    }
    const data = {
      data: etnia,
      message: 'ok',
    };
    return data;
  }catch(error) {
    throw new HttpException(
        {
            status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
            error: error.response?.error || 'No se pudo actualizar la etnia ',
        },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
    );
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
    }catch (error) {
      throw new HttpException(
          {
              status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
              error: error.response?.error || 'No se pudo eliminar la etnia',
          },
          error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
  }
  }
}
