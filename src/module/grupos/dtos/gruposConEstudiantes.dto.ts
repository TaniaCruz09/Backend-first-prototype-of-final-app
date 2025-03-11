import { IsNotEmpty, IsNumber, IsObject, IsOptional } from "class-validator";
import { Grupos } from "../entities/grupos.entity";
import { StudentEntity } from "../../../module/createEstudents";

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
  }