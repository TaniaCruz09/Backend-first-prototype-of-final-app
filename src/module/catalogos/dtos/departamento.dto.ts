import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class createDepartamentoDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  departamento: string;

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
