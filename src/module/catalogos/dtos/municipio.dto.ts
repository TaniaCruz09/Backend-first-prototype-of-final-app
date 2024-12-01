import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class createMunicipioDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    municipio: string
}