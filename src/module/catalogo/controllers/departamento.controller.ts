import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { DepartamentoService } from '../services/departamento.service';
import { createDepartamentoDto } from '../dtos/departamento.dto';




    @Controller('departamento')
    export class DepartamentoController {
    constructor(private readonly departamentoService: DepartamentoService) {}

    @Get('/')
    async findAll() {
        const departamento = await this.departamentoService.findAll();
        const data = {
        data: departamento,
        message: 'ok',
        };
        return data;
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const departamento = await this.departamentoService.findOne(id);
        const data = {
        data: departamento,
        message: 'ok',
        };
        return data;
    }

    @Post('/')
    async create(@Body() payload: createDepartamentoDto){
        const departamento = await this.departamentoService.create(payload);
        const data = {
        data: departamento,
        message: 'ok',
        };
        return data;
    }

    @Put('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() payload: createDepartamentoDto,
    ){
        const departamento = await this.departamentoService.update(id, payload);
        const data = {
        data: departamento,
        message: 'ok',
        };
        return data;
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        const departamento = await this.departamentoService.delete(id);
        const data = {
        data: departamento,
        message: 'ok',
        };
        return data; 
    }
    }
