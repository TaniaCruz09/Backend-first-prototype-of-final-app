import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { PaisService } from './pais.service';
import { createPaisDto } from './pais.dto';


    @Controller('pais')
    export class PaisController {
    constructor(private readonly paisService: PaisService) {}

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

    @Post('/')
    async create(@Body() payload: createPaisDto){
        const pais = await this.paisService.create(payload);
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
