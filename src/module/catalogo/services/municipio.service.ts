import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Municipio } from "../entities/municipio.entity";
import { Repository } from "typeorm";

@Injectable()
export class MunicipioService {
    constructor(
        @InjectRepository(Municipio)
        private municipioRepository: Repository<Municipio>,
    ) {}

    async create(municipio: Municipio): Promise<Municipio> {
        return await this.municipioRepository.save(municipio);
    }

    async findOne (id: number): Promise<Municipio> {
        const municipio = await this.municipioRepository.findOne({where: { id }});
        if (!municipio) {
            throw new NotFoundException (`Municipio con ID ${id} no encontrado`);
        }
        return municipio;
    }

    async findAll(): Promise<Municipio[]> {
        return await this.municipioRepository.find();
    }

    async update(id: number, updateMunicipioDTO: Partial<Municipio>): Promise<Municipio> {
        const municipio = await this.municipioRepository.preload({
            id,
            ...updateMunicipioDTO,
        });
        if (!municipio) {
            throw new NotFoundException(`Municipio con ID ${id} no encontrado`);
        }
        return await this.municipioRepository.save(municipio);
    }

    async delete(id: number): Promise<void> {
        const result = await this.municipioRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Municipio con ID ${id} no encontrado`);
        }
    }
}