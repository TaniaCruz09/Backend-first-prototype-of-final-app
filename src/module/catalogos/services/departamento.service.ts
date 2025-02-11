import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Departamento } from "../entities/departamento.entity";
import { Repository } from "typeorm";
import { Utilities } from "../../../common/helpers/utilities";


@Injectable()
export class DepartamentoService {
    constructor(
        @InjectRepository(Departamento)
        private departamentoRepository: Repository <Departamento>,
    ) {}

    async create(departamento: Departamento): Promise<Departamento> {
        try {
            return await this.departamentoRepository.save(departamento);
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async findOne (id: number): Promise<Departamento> {
        try {
            const departamento = await this.departamentoRepository.findOne({where: { id }});
            return departamento;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async findAll(): Promise<Departamento[]> {
        try {
            return await this.departamentoRepository.find();
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async update(id: number, updateDepartamentoDTO: Partial<Departamento>): Promise<Departamento> {
        try {
            const departamento = await this.departamentoRepository.preload({
                id,
                ...updateDepartamentoDTO,
            });
            return await this.departamentoRepository.save(departamento);
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const result = await this.departamentoRepository.delete(id);
            
        } catch (error) {
            Utilities.catchError (error)
        }
    }
}