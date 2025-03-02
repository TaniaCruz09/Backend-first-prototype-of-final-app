import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalificacionDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Calificaciones } from './entities/calificacion.entity';
import { Repository } from 'typeorm';
import { Utilities } from '../../common/helpers/utilities';

@Injectable()
export class CalificacionesService {
  constructor(
    @InjectRepository(Calificaciones)
    private readonly calificacionRepo: Repository<Calificaciones>,
  ){}

  async create(payload: CreateCalificacionDto):Promise<Calificaciones> {
    try {
      const calificacion = await this.calificacionRepo.create(payload)
      return await this.calificacionRepo.save(calificacion)
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async findAll():Promise<Calificaciones[]> {
    try {
      return await this.calificacionRepo.find({
        relations: ['estudiante', 'asignatura']
      })
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async findOne(id: number): Promise<Calificaciones> {
    try {
      const calificacion = await this.calificacionRepo.findOne({
        where: {id},
        relations: ['estudiante', 'asignatura']
      })
      return calificacion;
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async update(id: number, payload: UpdateCalificacioneDto): Promise<Calificaciones> {
    try {
      const calificaciones = await this.calificacionRepo.preload({id, ...payload});
      return await this.calificacionRepo.save(calificaciones)
    } catch (error) {
      Utilities.catchError(error)
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const result = await this.calificacionRepo.delete(id);
    } catch (error) {
      Utilities.catchError(error)
    }
  }
}
