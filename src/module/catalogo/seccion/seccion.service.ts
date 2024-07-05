import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Seccion } from "./seccion.entity";
import { Repository } from "typeorm";

@Injectable()
export class SeccionService {
    constructor (
        @InjectRepository(Seccion)
        private seccionRepository: Repository<Seccion>,
    ){}

    async findAll(): Promise<Seccion[]> {
        const seccion = await this.seccionRepository.find();
        return seccion;
    }
}