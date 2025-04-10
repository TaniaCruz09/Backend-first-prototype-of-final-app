import { IsDate, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";


export class GenderDto{
    @IsNumber()
    @IsOptional()
    readonly id: number;

    @IsString()
    @MaxLength(100)
    readonly gender: string
//agregando campos obligatorios 
    @IsOptional()
    @IsNumber()
    user_create_id: number;

    @IsOptional()
    @IsDate()
    create_at: Date;

    @IsOptional()
    @IsDate()
    update_at: Date;

    @IsOptional()
    @IsNumber()
    user_update_id: number;

    @IsOptional()
    @IsDate()
    delete_at:Date;

    @IsOptional()
    @IsNumber()
    delete_at_id: number

}