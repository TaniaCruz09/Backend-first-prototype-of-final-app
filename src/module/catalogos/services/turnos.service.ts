import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Turno } from '../entities/turnos.entity';
import { Utilities } from '../../../common/helpers/utilities';



@Injectable()
export class TurnoService {
  constructor(
    @InjectRepository(Turno)
    private turnoRepository: Repository<Turno>,
  ) {}

  async create(turno: Turno): Promise<Turno> {
    try{
      return await this.turnoRepository.save(turno);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findOne(id: number): Promise<Turno> {
    try{
      const turno = await this.turnoRepository.findOne({ where: { id } });
      return turno;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async findAll(): Promise<Turno[]> {
    try{
      return await this.turnoRepository.find();
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async update(id: number, updateTurnoDTO: Partial<Turno>): Promise<Turno> {
    try{
      const turno = await this.turnoRepository.preload({
        id,
        ...updateTurnoDTO,
      });
      return await this.turnoRepository.save(turno);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  async delete(id: number): Promise<void> {
    try{
      const result = await this.turnoRepository.delete(id);
      // if (result.affected === 0) {
      //   throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    } catch (error) {
      Utilities.catchError(error);
    } 
  }
}

