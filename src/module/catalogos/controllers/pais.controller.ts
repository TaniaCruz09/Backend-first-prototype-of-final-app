import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { PaisService } from '../services/pais.service';
import { createPaisDto } from '../dtos/pais.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

    @ApiTags('Pais')
    @ApiBearerAuth()
    @Controller('pais')
    export class PaisController {
    constructor(private readonly paisService: PaisService) {}

    @Post('/')
    async createPais(@Body() payload: createPaisDto){
        const pais = await this.paisService.createPais(payload);
        const data = {
        data: pais,
        message: 'ok',
        };
        return data;
    }

    @Get('/')
    async findAll() {
        const pais = await this.paisService.findAll();
        const data = {
        data: pais,
        message: 'ok',
        };
        return data;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const pais = await this.paisService.findOne(id);
        const data = {
        data: pais,
        message: 'ok',
        };
        return data;
    }

    @Put('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() payload: createPaisDto,
    ){
        const pais = await this.paisService.update(id, payload);
        const data = {
        data: pais,
        message: 'ok',
        };
        return data;
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const pais = await this.paisService.delete(id);
        const data = {
        data: pais,
        message: 'ok',
        };
        return data;
    }
    }
