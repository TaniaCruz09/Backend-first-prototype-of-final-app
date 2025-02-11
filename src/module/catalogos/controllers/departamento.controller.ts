import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { DepartamentoService } from '../services/departamento.service';
import { createDepartamentoDto } from '../dtos/departamento.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';


    @ApiTags('Departamento')
    @ApiBearerAuth()
    @Controller('departamento')
    export class DepartamentoController {
    constructor(private readonly departamentoService: DepartamentoService) {}

    @Get('/')
    async findAll() {
        try {
            const departamento = await this.departamentoService.findAll();
            const data = {
            data: departamento,
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
            const departamento = await this.departamentoService.findOne(id);
            const data = {
            data: departamento,
            message: 'ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Post('/')
    async create(@Body() payload: createDepartamentoDto){
        try {
            const departamento = await this.departamentoService.create(payload);
            const data = {
            data: departamento,
            message: 'Departamento creado correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Put('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() payload: createDepartamentoDto,
    ){
        try {
            const departamento = await this.departamentoService.update(id, payload);
            const data = {
            data: departamento,
            message: 'Departamento actualizado correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        try {
            const departamento = await this.departamentoService.delete(id);
            const data = {
            data: departamento,
            message: 'Departamento eliminado correctamente',
            };
            return data; 
        } catch (error) {
            Utilities.catchError (error)
        }
    }
    }
