import { IsDate, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";


export class ProfessionsDto{
    @IsNumber()
    @IsOptional()
    readonly id: number;

    @IsString()
    @MaxLength(100)
    readonly profession: string
    //ESTOY TRABAJANDO EN ESTO

    @IsOptional()
    @IsNumber()
    user_create_id: number;

    @IsOptional()
    @IsDate()
    created_at: Date
    
    @IsOptional()
    @IsDate()
    update_at: Date

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