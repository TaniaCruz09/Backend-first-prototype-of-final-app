import { IsDate, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, MaxLength, maxLength } from "class-validator";
import { Unique } from "typeorm";
import { Departamento, GenderEntity, Municipio, Pais } from "../catalogos";


export class StudentsDto {
    @IsOptional()
    @IsNumber()
    readonly id: number;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    readonly name: string;

    @IsOptional()
    @IsString()
    @MaxLength(50)
    readonly lastName: string;

    @IsOptional()
    @IsString()
    @Unique(['studentCode'])
    readonly studentCode: string;
    
    @IsOptional()
    @IsString()
    readonly identityCard: string;

    @IsOptional()
    @IsDate()
    readonly dateBirt: Date;
    
    @IsNotEmpty()
    @IsObject()
    pais: Pais;

    @IsNotEmpty()
    @IsObject()
    departamento: Departamento;

    @IsNotEmpty()
    @IsObject()
    municipio: Municipio;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    readonly address: string;

    @IsOptional()
    @IsString()
    readonly tutorName: string;

    @IsOptional()
    @IsString()
    @MaxLength(16)
    readonly tutorIdentityCard: string;

    @IsOptional()
    @IsString()
    @MaxLength(8)
    readonly tutorPhoneNumber: string;

    @IsNotEmpty()
    @IsObject()
    gender: GenderEntity;

    @IsOptional()
    @IsString()
    readonly observations: string;

    

 

    /*@IsOptional()
    @IsString()
    user
*/
   

}