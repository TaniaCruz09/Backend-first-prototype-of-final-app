import { Controller, Get, Post } from "@nestjs/common";
import { SeccionService } from "./seccion.service";

@Controller('seccion')
export class SeccionController {
    constructor(
        private readonly seccionService: SeccionService
    ){}
    @Get('/')
    async findAll(){
        const seccion = await this.seccionService.findAll
        const data = {
            data: seccion,
            message: 'ok',
          };
          return data;
    }

    @Get('/:id')
    async findOne(){
        const seccion = await this.seccionService.findOne
        const data = {
            data: seccion,
            message: 'ok',
          };
          return data;
    }



}