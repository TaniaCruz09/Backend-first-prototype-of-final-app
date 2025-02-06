import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Asignatura } from "../entities/asignatura.entity";
import { Repository } from "typeorm";

@Injectable()
export class AsignaturaService {
    constructor(
        @InjectRepository(Asignatura)
        private asignaturaRepository: Repository <Asignatura>,
    ) {}

    // Funcion para crear asignatura
    async create(asignatura: Asignatura): Promise<Asignatura> {
        try {
            return await this.asignaturaRepository.save(asignatura);
        } catch (error) {
            throw new InternalServerErrorException('Error al crear la asignatura', error.message)
        }
    }

    // Funcion para buscar una asignatura por su id
    async findOne (id: number): Promise<Asignatura> {
        try {
            const asignatura = await this.asignaturaRepository.findOne({where: { id }});
            if (!asignatura) {
                throw new NotFoundException(`Asignatura con ID ${id} no encontrado`);
            }
            return asignatura;
        } catch (error){
            throw error instanceof NotFoundException
        }
    }

    async findAll(): Promise<Asignatura[]> {
        return await this.asignaturaRepository.find();
    }

    async update(id: number, updateAsignaturaDTO: Partial<Asignatura>): Promise<Asignatura> {
        const asignatura = await this.asignaturaRepository.preload({
            id,
            ...updateAsignaturaDTO,
        });
        if (!asignatura) {
            throw new NotFoundException(`Asignatura con ID ${id} no encontrado`);
        }
        return await this.asignaturaRepository.save(asignatura);
    }

    async delete(id: number): Promise<void> {
        const result = await this.asignaturaRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Asignatura con ID ${id} no encontrado`);
        }
    }
}