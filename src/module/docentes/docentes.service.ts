import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Docentes } from "./docentes.entity";
import { Repository } from "typeorm";
import { DocentesDTO } from "./docentes.dto";
import { Utilities } from "../../common/helpers/utilities";

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docentes)
    private readonly docenteRepository: Repository<Docentes>,
  ){}

  async createDocente(createDocenteDto: DocentesDTO): Promise<Docentes> {
    try {
      const nuevoDocente = await this.docenteRepository.create(createDocenteDto);
      return this.docenteRepository.save(nuevoDocente);
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async getDocente(): Promise<Docentes[]> { 
    try {
      return await this.docenteRepository.find({ 
        relations: ['sexo', 'nivel_academico', 'profesion', 'pais', 'departamento', 'municipio'] 
      });
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async getDocenteById(id: number): Promise<Docentes> { 
    try {
      const docente = await this.docenteRepository.findOne({
        where: { id },
        relations: ['sexo', 'nivel_academico', 'profesion', 'pais', 'departamento', 'municipio']
      });
      return docente;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async deleteDocente(id: number): Promise<void> {
    try {
      const result = await this.docenteRepository.delete(id);
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async editDocente(id: number, payload: DocentesDTO): Promise<Docentes> {
    try {
      const docente = await this.docenteRepository.preload({ id, ...payload });
      return await this.docenteRepository.save(docente);
    } catch (error) {
      Utilities.catchError(error) 
    }
    }
}