import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Asignatura } from "../entities/asignatura.entity";
import { Repository } from "typeorm";
import { Utilities } from "../../../common/helpers/utilities";

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
            Utilities.catchError (error)
        }
    }

    // Funcion para buscar una asignatura por su id
    async findOne (id: number): Promise<Asignatura> {
        try {
            const asignatura = await this.asignaturaRepository.findOne({where: { id }});
            return asignatura;
        } catch (error){
            Utilities.catchError (error)
        }
    }

    async findAll(): Promise<Asignatura[]> {
        try {
            return await this.asignaturaRepository.find();
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async update(id: number, updateAsignaturaDTO: Partial<Asignatura>): Promise<Asignatura> {
        try {
            const asignatura = await this.asignaturaRepository.preload({
                id,
                ...updateAsignaturaDTO,
            });
            return await this.asignaturaRepository.save(asignatura);
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const result = await this.asignaturaRepository.delete(id);
        } catch (error) {
            Utilities.catchError (error)
        }
        
    }
}