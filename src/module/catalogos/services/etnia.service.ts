import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Repository } from 'typeorm';
import { Etnia } from '../entities/etnia.entity';
import { Utilities } from '../../../common/helpers/utilities';



@Injectable()
export class EtniaService {
  constructor(
    @InjectRepository(Etnia)
    private etniaRepository: Repository<Etnia>,
  ) {}

  async create(etnia: Etnia): Promise<Etnia> {
    try{
    return await this.etniaRepository.save(etnia);
  } catch (error) {
    Utilities.catchError(error);
  }
}

  async findOne(id: number): Promise<Etnia> {
    try{
    const etnia = await this.etniaRepository.findOne({ where: { id } });
    return etnia;
  } catch (error) {
    Utilities.catchError(error);
  }
}

  async findAll(): Promise<Etnia[]> {
    try{
    return await this.etniaRepository.find();
  } catch (error) {
    Utilities.catchError(error);
  }
}

  async update(id: number, updateEtniaDTO: Partial<Etnia>): Promise<Etnia> {
    try{
    const etnia = await this.etniaRepository.preload({
      id,
      ...updateEtniaDTO,
    });
    return await this.etniaRepository.save(etnia);
  } catch (error) {
    Utilities.catchError(error);
  }
}

  async delete(id: number): Promise<Etnia> {
    try{
    const result = await this.etniaRepository.findOne({ where: { id } });
    return await this.etniaRepository.remove(result);
  } catch (error) {
    Utilities.catchError(error);
  }
}
}

