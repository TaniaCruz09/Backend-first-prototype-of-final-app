import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength
} from 'class-validator';


export class RolesDto{
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    role: string;
  
}