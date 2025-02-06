import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
    try{
    return await this.etniaRepository.save(etnia);
  }catch (error) {
        throw new InternalServerErrorException('Error al Crear la nueva etnia', error.message);
      }
}

  async findOne(id: number): Promise<Etnia> {
    try{
    const etnia = await this.etniaRepository.findOne({ where: { id } });
    if (!etnia) {
      throw new NotFoundException(`Etnia con ID ${id} no encontrado`);
    }
    return etnia;
  }catch(error) {
    throw new InternalServerErrorException('Error fetching etnia', error.message);
  }
}

  async findAll(): Promise<Etnia[]> {
    try{
    return await this.etniaRepository.find();
  }catch (error) {
    throw new InternalServerErrorException('Error fetching etnia', error.message);
  }
}

  async update(id: number, updateEtniaDTO: Partial<Etnia>): Promise<Etnia> {
    try{
    const etnia = await this.etniaRepository.preload({
      id,
      ...updateEtniaDTO,
    });
    if (!etnia) {
      throw new NotFoundException(`Etnia con ID ${id} no encontrado`);
    }
    return await this.etniaRepository.save(etnia);
  }catch (error) {
    throw error instanceof NotFoundException ? error : new InternalServerErrorException('Error updating etnia', error.message);
  }
}

  async delete(id: number): Promise<Etnia> {
    try{
    const result = await this.etniaRepository.findOne({ where: { id } });
    if (!result) {
      throw new NotFoundException(`Etnia con ID ${id} no encontrado`);
    }return await this.etniaRepository.remove(result);
  }catch(error) {
    throw error instanceof NotFoundException ? error : new InternalServerErrorException('Error al eliminar etnia ', error.message);
  }
}
}

