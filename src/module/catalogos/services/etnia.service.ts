import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Etnia } from '../entities/etnia.entity';



@Injectable()
export class EtniaService {
  constructor(
    @InjectRepository(Etnia)
    private etniaRepository: Repository<Etnia>,
  ) {}

  async create(etnia: Etnia): Promise<Etnia> {
    return await this.etniaRepository.save(etnia);
  }

  async findOne(id: number): Promise<Etnia> {
    const etnia = await this.etniaRepository.findOne({ where: { id } });
    if (!etnia) {
      throw new NotFoundException(`Etnia con ID ${id} no encontrado`);
    }
    return etnia;
  }

  async findAll(): Promise<Etnia[]> {
    return await this.etniaRepository.find();
  }

  async update(id: number, updateEtniaDTO: Partial<Etnia>): Promise<Etnia> {
    const etnia = await this.etniaRepository.preload({
      id,
      ...updateEtniaDTO,
    });
    if (!etnia) {
      throw new NotFoundException(`Etnia con ID ${id} no encontrado`);
    }
    return await this.etniaRepository.save(etnia);
  }

  async delete(id: number): Promise<void> {
    const result = await this.etniaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Etnia con ID ${id} no encontrado`);
    }
  }
}

