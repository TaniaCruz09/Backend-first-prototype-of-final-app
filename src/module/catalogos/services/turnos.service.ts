import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Turno } from '../entities/turnos.entity';



@Injectable()
export class TurnoService {
  constructor(
    @InjectRepository(Turno)
    private turnoRepository: Repository<Turno>,
  ) {}

  async create(turno: Turno): Promise<Turno> {
    return await this.turnoRepository.save(turno);
  }

  async findOne(id: number): Promise<Turno> {
    const turno = await this.turnoRepository.findOne({ where: { id } });
    if (!turno) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return turno;
  }

  async findAll(): Promise<Turno[]> {
    return await this.turnoRepository.find();
  }

  async update(id: number, updateTurnoDTO: Partial<Turno>): Promise<Turno> {
    const turno = await this.turnoRepository.preload({
      id,
      ...updateTurnoDTO,
    });
    if (!turno) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
    return await this.turnoRepository.save(turno);
  }

  async delete(id: number): Promise<void> {
    const result = await this.turnoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Turno con ID ${id} no encontrado`);
    }
  }
}

