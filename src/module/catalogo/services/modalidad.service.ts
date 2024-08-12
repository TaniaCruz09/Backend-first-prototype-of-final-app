import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Modalidad } from '../entities/modalidad.entity';

@Injectable()
export class ModalidadService {
  constructor(
    @InjectRepository(Modalidad)
    private modalidadRepository: Repository<Modalidad>,
  ) {}

  async create(modalidad: Modalidad): Promise<Modalidad> {
    return await this.modalidadRepository.save(modalidad);
  }

  async findOne(id: number): Promise<Modalidad> {
    const modalidad = await this.modalidadRepository.findOne({ where: { id } });
    if (!modalidad) {
      throw new NotFoundException(`modalidad con ID ${id} no encontrado`);
    }
    return modalidad;
  }

  async findAll(): Promise<Modalidad[]> {
    return await this.modalidadRepository.find();
  }

  async update(id: number, updateEtniaDTO: Partial<Modalidad>): Promise<Modalidad> {
    const modalidad = await this.modalidadRepository.preload({
      id,
      ...updateEtniaDTO,
    });
    if (!modalidad) {
      throw new NotFoundException(`modalidad con ID ${id} no encontrado`);
    }
    return await this.modalidadRepository.save(modalidad);
  }

  async delete(id: number): Promise<void> {
    const result = await this.modalidadRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`modalidad con ID ${id} no encontrado`);
    }
  }
}

