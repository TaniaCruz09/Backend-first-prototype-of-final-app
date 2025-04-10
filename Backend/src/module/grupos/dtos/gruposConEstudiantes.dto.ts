import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
} from 'class-validator';
import { Grupos } from '../entities/grupos.entity';
import { StudentEntity } from '../../createEstudents';
import { Asignatura } from 'src/module/catalogos';

export class CreateGrupoConEstudiantesDto {
  @IsOptional()
  @IsNumber()
  readonly id?: number;

  @IsNotEmpty()
  @IsObject()
  grupo: Grupos;

  @IsNotEmpty()
  @IsObject()
  estudiante: StudentEntity;

  @IsNotEmpty()
  @IsObject()
  asignatura: Asignatura;

  @IsOptional()
  @IsNumber()
  user_create_id: number;

  @IsOptional()
  @IsDate()
  created_at: Date;

  @IsOptional()
  @IsDate()
  update_at: Date;

  @IsOptional()
  @IsNumber()
  user_update_id: number;

  @IsOptional()
  @IsDate()
  deleted_at: Date;

  @IsOptional()
  @IsNumber()
  deleted_at_id: number;
}
