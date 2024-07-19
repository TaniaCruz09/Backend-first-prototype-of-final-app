import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Seccion } from './seccion.entity';



@Injectable()
export class SeccionService {
  constructor(
    @InjectRepository(Seccion)
    private seccionRepository: Repository<Seccion>,
  ) {}

  async create(seccion: Seccion): Promise<Seccion> {
    return await this.seccionRepository.save(seccion);
  }

  async findOne(id: number): Promise<Seccion> {
    const seccion = await this.seccionRepository.findOne({ where: { id } });
    if (!seccion) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return seccion;
  }

  async findAll(): Promise<Seccion[]> {
    return await this.seccionRepository.find();
  }

  async update(id: number, updateEtniaDTO: Partial<Seccion>): Promise<Seccion> {
    const seccion = await this.seccionRepository.preload({
      id,
      ...updateEtniaDTO,
    });
    if (!seccion) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return await this.seccionRepository.save(seccion);
  }

  async delete(id: number): Promise<void> {
    const result = await this.seccionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
  }
}

