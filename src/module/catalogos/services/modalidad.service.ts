import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Modalidad } from '../entities/modalidad.entity';
import { Utilities } from '../../../common/helpers/utilities';

@Injectable()
export class ModalidadService {
  constructor(
    @InjectRepository(Modalidad)
    private modalidadRepository: Repository<Modalidad>,
  ) {}

  async create(modalidad: Modalidad): Promise<Modalidad> {
    try{
      return await this.modalidadRepository.save(modalidad);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findOne(id: number): Promise<Modalidad> {
    try{
      const modalidad = await this.modalidadRepository.findOne({ where: { id } });
      // if (!modalidad) {
      //   throw new NotFoundException(`modalidad con ID ${id} no encontrado`);
      // }
      return modalidad;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findAll(): Promise<Modalidad[]> {
    try{
      return await this.modalidadRepository.find();
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async update(id: number, updateEtniaDTO: Partial<Modalidad>): Promise<Modalidad> {
    try{

      const modalidad = await this.modalidadRepository.preload({
        id,
        ...updateEtniaDTO,
      });
      return await this.modalidadRepository.save(modalidad);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async delete(id: number): Promise<void> {
    try{
      const result = await this.modalidadRepository.delete(id);
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}

