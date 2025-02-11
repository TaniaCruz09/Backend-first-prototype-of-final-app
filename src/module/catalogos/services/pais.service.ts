import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pais } from "../entities/pais.entity";
import { Repository } from "typeorm";
import { AcademicLevelEntity } from "..";
import { Utilities } from "../../../common/helpers/utilities";

@Injectable()
export class PaisService {
    constructor(
        @InjectRepository(Pais)
        private paisRepository: Repository<Pais>,
    ) {}

    async createPais(pais: Pais): Promise<Pais> {
        try {
            return await this.paisRepository.save(pais);
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async findOne (id: number): Promise<Pais> {
        try {
            const pais = await this.paisRepository.findOne({where: { id }});
            return pais;
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async findAll(): Promise<Pais[]> {
        try {
            return await this.paisRepository.find();
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async update(id: number, updatePaisDTO: Partial<Pais>): Promise<Pais> {
        try {
            const pais = await this.paisRepository.preload({
                id,
                ...updatePaisDTO,
            });
            return await this.paisRepository.save(pais);
        } catch (error) {
            Utilities.catchError (error)
        }
    }

    async delete(id: number): Promise<Pais> {
        try {
            const result = await this.paisRepository.findOne({
                where: {id: id}
            })
            return await this.paisRepository.remove(result)
        } catch (error) {
            Utilities.catchError (error)
        }
    }
}