import { IsNotEmpty, IsNumberString, IsOptional, IsString, MaxLength } from "class-validator";

export class createEtniaDto {
  @IsOptional()
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  etnia: string;
}