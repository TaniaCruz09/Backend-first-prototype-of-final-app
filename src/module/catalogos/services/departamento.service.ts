import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Departamento } from "../entities/departamento.entity";
import { Repository } from "typeorm";


@Injectable()
export class DepartamentoService {
    constructor(
        @InjectRepository(Departamento)
        private departamentoRepository: Repository <Departamento>,
    ) {}

    async create(departamento: Departamento): Promise<Departamento> {
        return await this.departamentoRepository.save(departamento);
    }

    async findOne (id: number): Promise<Departamento> {
        const departamento = await this.departamentoRepository.findOne({where: { id }});
        if (!departamento) {
            throw new NotFoundException(`Departamento con ID ${id} no encontrado`);
        }
        return departamento;
    }

    async findAll(): Promise<Departamento[]> {
        return await this.departamentoRepository.find();
    }

    async update(id: number, updateDepartamentoDTO: Partial<Departamento>): Promise<Departamento> {
        const departamento = await this.departamentoRepository.preload({
            id,
            ...updateDepartamentoDTO,
        });
        if (!departamento) {
            throw new NotFoundException(`Departamento con ID ${id} no encontrado`);
        }
        return await this.departamentoRepository.save(departamento);
    }

    async delete(id: number): Promise<void> {
        const result = await this.departamentoRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Departamento con ID ${id} no encontrado`);
        }
    }
}