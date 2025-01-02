import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { Asignatura } from "src/module/catalogos";
import { StudentEntity } from "src/module/createEstudents";

export class CreateCalificacionDto {
    @IsOptional()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsObject()
    estudiante: StudentEntity;

    @IsNotEmpty()
    @IsObject()
    asignatura: Asignatura;

    @IsNotEmpty()
    @IsString()
    notaCualitativa: string;

    @IsOptional()
    @IsNumber()
    notaCuantitativa: number
}
