import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalificacionDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Calificaciones } from './entities/calificacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CalificacionesService {
  constructor(
    @InjectRepository(Calificaciones)
    private readonly calificacionRepo: Repository<Calificaciones>,
  ){}

  async create(payload: CreateCalificacionDto):Promise<Calificaciones> {
    const calificacion = await this.calificacionRepo.create(payload)
    return await this.calificacionRepo.save(calificacion)
  }

  async findAll():Promise<Calificaciones[]> {
    return await this.calificacionRepo.find({
      relations: ['estudiante', 'asignatura']
    })
  }

  async findOne(id: number): Promise<Calificaciones> {
    const calificacion = await this.calificacionRepo.findOne({
      where: {id},
      relations: ['estudiante', 'asignatura']
    })
    if (!calificacion) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }
    return calificacion;
  }

  async update(id: number, payload: UpdateCalificacioneDto): Promise<Calificaciones> {
    const calificaciones = await this.calificacionRepo.preload({id, ...payload});
    return await this.calificacionRepo.save(calificaciones)
  }

  async remove(id: number): Promise<void> {
    const result = await this.calificacionRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Calificacion con ID ${id} no encontrado`);
    }
  }
}
