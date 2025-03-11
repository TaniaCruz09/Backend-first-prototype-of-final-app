import { IsNotEmpty, IsNumber, IsObject, IsOptional } from "class-validator";
import { Grupos } from "../entities/grupos.entity";
import { StudentEntity } from "../../createEstudents";

export class UpdateGrupoConEstudiantesDto {
    @IsOptional()
    @IsNumber()
    readonly id?: number;

    @IsNotEmpty()
    @IsObject()
    grupo?: Grupos;

    @IsNotEmpty()
    @IsObject()
    estudiante?: StudentEntity;
  }