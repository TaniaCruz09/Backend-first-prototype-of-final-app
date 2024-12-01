import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class createPaisDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    pais: string

}