import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { MunicipioService } from '../services/municipio.service';
import { createMunicipioDto } from '../dtos/municipio.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';

    @ApiTags('municipio')
    @ApiBearerAuth()
    @Controller('municipio')
    export class MunicipioController {
    constructor(private readonly municipioService: MunicipioService) {}

    @Get('/')
    async findAll() {
        try {
            const municipio = await this.municipioService.findAll();
            const data = {
            data: municipio,
            message: 'ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        try {
            const municipio = await this.municipioService.findOne(id);
            const data = {
            data: municipio,
            message: 'ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Post('/')
    async create(@Body() payload: createMunicipioDto){
        try {
            const municipio = await this.municipioService.create(payload);
            const data = {
            data: municipio,
            message: 'Municipio creado correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Put('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() payload: createMunicipioDto,
    ){
        try {
            const municipio = await this.municipioService.update(id, payload);
            const data = {
            data: municipio,
            message: 'Municipio actualizado correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        try {
            const municipio = await this.municipioService.delete(id);
            const data = {
            data: municipio,
            message: 'Municipio eliminado correctamente',
            };
            return data; 
        } catch (error) {
            Utilities.catchError (error)
        }
    }
    }
