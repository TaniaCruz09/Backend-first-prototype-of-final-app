import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pais } from "../entities/pais.entity";
import { Repository } from "typeorm";

@Injectable()
export class PaisService {
    constructor(
        @InjectRepository(Pais)
        private paisRepository: Repository<Pais>,
    ) {}

    async create(pais: Pais): Promise<Pais> {
        return await this.paisRepository.save(pais);
    }

    async findOne (id: number): Promise<Pais> {
        const pais = await this.paisRepository.findOne({where: { id }});
        if (!pais) {
            throw new NotFoundException(`Pais con ID ${id} no encontrado`);
        }
        return pais;
    }

    async findAll(): Promise<Pais[]> {
        return await this.paisRepository.find();
    }

    async update(id: number, updatePaisDTO: Partial<Pais>): Promise<Pais> {
        const pais = await this.paisRepository.preload({
            id,
            ...updatePaisDTO,
        });
        if (!pais) {
            throw new NotFoundException(`Pais con ID ${id} no encontrado`);
        }
        return await this.paisRepository.save(pais);
    }

    async delete(id: number): Promise<void> {
        const result = await this.paisRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Pais con ID ${id} no encontrado`);
        }
    }
}