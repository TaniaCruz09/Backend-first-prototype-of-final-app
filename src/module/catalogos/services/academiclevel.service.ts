import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { AcademicLevelDto } from "../dtos/academiclevel.dto";
import { AcademicLevelEntity } from "../entities/academiclevel.entity";

@Injectable()
export class AcademicLevelService {
  constructor(
    @InjectRepository(AcademicLevelEntity)
    private readonly AcademicLevelRepo: Repository<AcademicLevelEntity>,
  ) {}

  async created(payload: AcademicLevelDto) {
    try {
      const academicLevel = this.AcademicLevelRepo.create(payload);
      return await this.AcademicLevelRepo.save(academicLevel);
    } catch (error) {
      throw new InternalServerErrorException('Error al Crear el Nivel Academico', error.message);
    }
  }

  async getAcademicLevel() {
    try {
      const academicLevels = await this.AcademicLevelRepo.find();
      console.log(academicLevels);
      return academicLevels;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching academic levels', error.message);
    }
  }

  async getAcademicLevelById(id: number): Promise<AcademicLevelEntity> {
    try {
      const academicLevel = await this.AcademicLevelRepo.findOne({ where: { id } });
      if (!academicLevel) {
        throw new NotFoundException(`Academic level with ID ${id} not found`);
      }
      return academicLevel;
    } catch (error) {
      throw error instanceof NotFoundException ? error : new InternalServerErrorException('Error fetching academic level by ID', error.message);
    }
  }

  async updateAcademicLevel(id: number, payload: AcademicLevelDto): Promise<AcademicLevelEntity> {
    try {
      const academicLevel = await this.AcademicLevelRepo.preload({ id, ...payload });
      if (!academicLevel) {
        throw new NotFoundException(`Academic level with ID ${id} not found`);
      }
      return await this.AcademicLevelRepo.save(academicLevel);
    } catch (error) {
      throw error instanceof NotFoundException ? error : new InternalServerErrorException('Error updating academic level', error.message);
    }
  }

  async deleteAcademicLevel(id: number): Promise<AcademicLevelEntity> {
    try {
      const academicLevel = await this.AcademicLevelRepo.findOne({ where: { id } });
      if (!academicLevel) {
        throw new NotFoundException(`Academic level with ID ${id} not found`);
      }
      return await this.AcademicLevelRepo.remove(academicLevel);
    } catch (error) {
      throw error instanceof NotFoundException ? error : new InternalServerErrorException('Error deleting academic level', error.message);
    }
  }
}
