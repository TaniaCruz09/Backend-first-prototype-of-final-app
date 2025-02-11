import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Seccion } from '../entities/seccion.entity';
import { Utilities } from '../../../common/helpers/utilities';

@Injectable()
export class SeccionService {
  constructor(
    @InjectRepository(Seccion)
    private seccionRepository: Repository<Seccion>,
  ) {}

  async create(seccion: Seccion): Promise<Seccion> {
    try{
      return await this.seccionRepository.save(seccion);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findOne(id: number): Promise<Seccion> {
    try{
      const seccion = await this.seccionRepository.findOne({ where: { id } });
      return seccion;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findAll(): Promise<Seccion[]> {
    try{
      return await this.seccionRepository.find();
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async update(id: number, updateEtniaDTO: Partial<Seccion>): Promise<Seccion> {
    try{
      const seccion = await this.seccionRepository.preload({
        id,
        ...updateEtniaDTO,
      });
      return await this.seccionRepository.save(seccion);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async delete(id: number): Promise<void> {
    try{
      const result = await this.seccionRepository.delete(id);
    } catch (error) {
      Utilities.catchError(error);
    }  
  }
}

