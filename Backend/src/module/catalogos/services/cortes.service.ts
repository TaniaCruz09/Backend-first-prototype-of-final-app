import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilities } from '../../../common/helpers/utilities';
import { Cortes } from '../entities/corte.entity';
import { createCortesDto } from '../dtos/create-corte.dto';

@Injectable()
export class CortesService {
  constructor(
    @InjectRepository(Cortes)
    private readonly corteRepository: Repository<Cortes>,
  ) {}

  async createcorte(payload: createCortesDto): Promise<Cortes> {
    try {
      const corte = await this.corteRepository.create(payload);
      return await this.corteRepository.save(corte);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findOne(id: number): Promise<Cortes> {
    try {
      const corte = await this.corteRepository.findOne({ where: { id } });
      return corte;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findAll(): Promise<Cortes[]> {
    try {
      const corte = await this.corteRepository.find();
      return corte;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async update(id: number, payload: Partial<Cortes>): Promise<Cortes> {
    try {
      const corte = await this.corteRepository.findOne({
        where: { id },
      });

      Object.assign(corte, payload);

      corte.update_at = new Date();
      corte.user_updated_id;

      return await this.corteRepository.save(corte);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async delete(id: number, userId: number): Promise<Cortes> {
    try {
      const corte = await this.corteRepository.findOne({
        where: { id },
      });

      corte.delete_at = new Date();
      corte.delete_at_id = userId;

      return await this.corteRepository.save(corte);
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}
