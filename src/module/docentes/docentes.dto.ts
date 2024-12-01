import { IsArray, IsDate, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { AcademicLevelEntity, Departamento, GenderEntity, Municipio, Pais, ProfessionsEntity } from "../catalogos";

export class DocentesDTO {
    @IsOptional()
    @IsNumber()
    readonly id?: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly nombres: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly apellido_paterno: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly apellido_materno: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(16)
    readonly cedula_identidad: string;

    @IsNotEmpty()
    @IsObject()
    readonly sexo: GenderEntity;

    @IsNotEmpty()
    @IsArray()
    readonly nivel_academico: AcademicLevelEntity[];

    @IsNotEmpty()
    @IsArray()
    readonly profesion: ProfessionsEntity[];

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    readonly telefono: string;

    @IsNotEmpty()
    @IsDate()
    readonly fecha_nacimiento: Date;

    @IsNotEmpty()
    @IsObject()
    readonly pais: Pais;

    @IsNotEmpty()
    @IsObject()
    readonly departamento: Departamento;

    @IsNotEmpty()
    @IsObject()
    readonly municipio: Municipio;

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    readonly direccion_domiciliar: string;

    @IsNotEmpty()
    @IsDate()
    readonly fechaContratado: Date;

    @IsNotEmpty()
    @IsString()
    @MaxLength(150)
    readonly nombre_contacto_emergencia: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(12)
    readonly telefono_contacto_emergencia: string;


} 