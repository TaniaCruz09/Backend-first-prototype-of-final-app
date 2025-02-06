import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { MunicipioService } from '../services/municipio.service';
import { createMunicipioDto } from '../dtos/municipio.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

    @ApiTags('municipio')
    @ApiBearerAuth()
    @Controller('municipio')
    export class MunicipioController {
    constructor(private readonly municipioService: MunicipioService) {}

    @Get('/')
    async findAll() {
        const municipio = await this.municipioService.findAll();
        const data = {
        data: municipio,
        message: 'ok',
        };
        return data;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const municipio = await this.municipioService.findOne(id);
        const data = {
        data: municipio,
        message: 'ok',
        };
        return data;
    }

    @Post('/')
    async create(@Body() payload: createMunicipioDto){
        const municipio = await this.municipioService.create(payload);
        const data = {
        data: municipio,
        message: 'ok',
        };
        return data;
    }

    @Put('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() payload: createMunicipioDto,
    ){
        const municipio = await this.municipioService.update(id, payload);
        const data = {
        data: municipio,
        message: 'ok',
        };
        return data;
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const municipio = await this.municipioService.delete(id);
        const data = {
        data: municipio,
        message: 'ok',
        };
        return data; 
    }
    }
