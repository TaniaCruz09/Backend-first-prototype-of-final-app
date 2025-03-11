import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilities } from '../../../common/helpers/utilities';
import { GruposConEstudiantes } from '../entities/gruposConEstudiantes.entity';
import { CreateGrupoConEstudiantesDto } from '../dtos/gruposConEstudiantes.dto';
import { UpdateGrupoConEstudiantesDto } from '../dtos/updateGruposConEstudiantes.dto';

@Injectable()
export class GruposConEstudiantesService {
    constructor(
        @InjectRepository(GruposConEstudiantes)
        private grupoRepository: Repository<GruposConEstudiantes>
    ){}

    async createGrupo(createGrupoDto: CreateGrupoConEstudiantesDto): Promise<GruposConEstudiantes> {
        try{
            const nuevoGrupo = this.grupoRepository.create(createGrupoDto);
            return await this.grupoRepository.save(nuevoGrupo)
        } catch(error){
            Utilities.catchError(error)
        }
    }

    async getGrupo(): Promise<GruposConEstudiantes[]>{
        try{
            const grupo = await this.grupoRepository.find({
                relations: ['grupo', 'estudiante']
            });
            return grupo;
        } catch(error){
            Utilities.catchError(error)
        }
    }

    async getGrupoById(id:number): Promise<GruposConEstudiantes>{
        try{
            const grupo = await this.grupoRepository.findOne({
                where: {id},
                relations: ['grupo', 'estudiante']
            })
            return grupo;
        } catch(error){
            Utilities.catchError(error)
        }
    }

    async deleteGrupos(id:number): Promise<GruposConEstudiantes>{
        try {
            const grupos = await this.grupoRepository.findOne({
                where: {id: id}
            });
            return await this.grupoRepository.remove(grupos)
        } catch (error){
            Utilities.catchError(error)
        }
    }

    async updateGrupos(id: number, payload: UpdateGrupoConEstudiantesDto): Promise<GruposConEstudiantes>{
        try{
            const grupos = await this.grupoRepository.preload({ id, ...payload });
            if (!grupos) throw new NotFoundException(`Grupos con ID ${id} no encontrado`);
            return await this.grupoRepository.save(grupos);
        }catch(error){
            Utilities.catchError(error)
        }
    }
}
