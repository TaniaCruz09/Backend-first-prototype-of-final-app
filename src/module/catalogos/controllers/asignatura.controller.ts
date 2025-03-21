import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { AsignaturaService } from '../services/asignatura.service';
import { createAsignaturaDto } from '../dtos/asignatura.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Utilities } from '../../../common/helpers/utilities';

@ApiTags('asignatura')
@ApiBearerAuth()
@Controller('asignatura')
export class AsignaturaController {
    constructor(private readonly asignaturaService: AsignaturaService) {}

    @Get('/')
    async findAll() {
        try {
            const asignatura = await this.asignaturaService.findAll();
            const data = {
                data: asignatura,
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
            const asignatura = await this.asignaturaService.findOne(id);
            const data = {
                data: asignatura,
                message: 'ok',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Post('/')
    async create(@Body() payload: createAsignaturaDto) {
        try {
            const asignatura = await this.asignaturaService.create(payload);
            const data = {
                data: asignatura,
                message: 'Asignatura creada correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Put('/:id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: createAsignaturaDto,
    ) {
        try {
            const asignatura = await this.asignaturaService.update(id, payload);
            const data = {
                data: asignatura,
                message: 'Asignatura Actualizada correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        try {
            const asignatura = await this.asignaturaService.delete(id);
            const data = {
                data: asignatura,
                message: 'Asignatura eliminada correctamente',
            };
            return data;
        } catch (error) {
            Utilities.catchError (error)
        }
    }
}
