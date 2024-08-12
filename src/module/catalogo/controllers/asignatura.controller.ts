import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { AsignaturaService } from '../services/asignatura.service';
import { createAsignaturaDto } from '../dtos/asignatura.dto';


    @Controller('asignatura')
    export class AsignaturaController {
    constructor(private readonly asignaturaService: AsignaturaService) {}

    @Get('/')
    async findAll() {
        const asignatura = await this.asignaturaService.findAll();
        const data = {
        data: asignatura,
        message: 'ok',
        };
        return data;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const asignatura = await this.asignaturaService.findOne(id);
        const data = {
        data: asignatura,
        message: 'ok',
        };
        return data;
    }

    @Post('/')
    async create(@Body() payload: createAsignaturaDto){
        const asignatura = await this.asignaturaService.create(payload);
        const data = {
        data: asignatura,
        message: 'ok',
        };
        return data;
    }

    @Put('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() payload: createAsignaturaDto,
    ){
        const asignatura = await this.asignaturaService.update(id, payload);
        const data = {
        data: asignatura,
        message: 'ok',
        };
        return data;
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const asignatura = await this.asignaturaService.delete(id);
        const data = {
        data: asignatura,
        message: 'ok',
        };
        return data; 
    }
    }
