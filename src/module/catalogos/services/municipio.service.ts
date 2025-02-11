import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Municipio } from "../entities/municipio.entity";
import { Repository } from "typeorm";
import { Utilities } from "../../../common/helpers/utilities";

@Injectable()
export class MunicipioService {
    constructor(
        @InjectRepository(Municipio)
        private municipioRepository: Repository<Municipio>,
    ) {}

    async create(municipio: Municipio): Promise<Municipio> {
        try {
            return await this.municipioRepository.save(municipio);
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async findOne (id: number): Promise<Municipio> {
        try {
            const municipio = await this.municipioRepository.findOne({where: { id }});
            return municipio;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async findAll(): Promise<Municipio[]> {
        try {
            return await this.municipioRepository.find();
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async update(id: number, updateMunicipioDTO: Partial<Municipio>): Promise<Municipio> {
        try {
            const municipio = await this.municipioRepository.preload({
                id,
                ...updateMunicipioDTO,
            });
            return await this.municipioRepository.save(municipio);
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const result = await this.municipioRepository.delete(id);
        } catch (error) {
            Utilities.catchError (error)
        }
    }
}