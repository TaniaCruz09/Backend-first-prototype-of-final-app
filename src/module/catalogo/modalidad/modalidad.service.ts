import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Modalidad } from './modalidad.entity';



@Injectable()
export class ModalidadService {
  constructor(
    @InjectRepository(Modalidad)
    private etniaRepository: Repository<Modalidad>,
  ) {}

  async create(modalidad: Modalidad): Promise<Modalidad> {
    return await this.etniaRepository.save(modalidad);
  }

  async findOne(id: number): Promise<Modalidad> {
    const modalidad = await this.etniaRepository.findOne({ where: { id } });
    if (!modalidad) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return modalidad;
  }

  async findAll(): Promise<Modalidad[]> {
    return await this.etniaRepository.find();
  }

  async update(id: number, updateEtniaDTO: Partial<Modalidad>): Promise<Modalidad> {
    const modalidad = await this.etniaRepository.preload({
      id,
      ...updateEtniaDTO,
    });
    if (!modalidad) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return await this.etniaRepository.save(modalidad);
  }

  async delete(id: number): Promise<void> {
    const result = await this.etniaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
  }
}

