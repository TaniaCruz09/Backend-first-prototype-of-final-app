import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Docentes } from "./docentes.entity";
import { Repository } from "typeorm";
import { DocentesDTO } from "./docentes.dto";

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docentes)
    private readonly docenteRepository: Repository<Docentes>,
  ){}

  async createDocente(createDocenteDto: DocentesDTO): Promise<Docentes> {
    const nuevoDocente = this.docenteRepository.create(createDocenteDto);
    return this.docenteRepository.save(nuevoDocente);
  }

  async getDocente(): Promise<Docentes[]> {
    return await this.docenteRepository.find({ 
      relations: ['sexo', 'nivel_academico', 'profesion', 'pais', 'departamento', 'municipio'] 
    });
  }

  async getDocenteById(id: number): Promise<Docentes> {
    const docente = await this.docenteRepository.findOne({
      where: { id },
      relations: ['sexo', 'nivel_academico', 'profesion', 'pais', 'departamento', 'municipio']
    });

    if (!docente) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }

    return docente;
  }

  async deleteDocente(id: number): Promise<void> {
    const result = await this.docenteRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }
  }

  async editDocente(id: number, payload: DocentesDTO): Promise<Docentes> {
    const docente = await this.docenteRepository.preload({ id, ...payload });

    if (!docente) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }

    return await this.docenteRepository.save(docente);
  }
}