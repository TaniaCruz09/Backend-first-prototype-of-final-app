import {
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
  } from 'class-validator';
  
  export class RoleDto {
    @IsOptional()
    @IsNumber()
    id: number;
  
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    role: string;
  
    @IsBoolean()
    @IsOptional()
    is_active: boolean;
  }
  