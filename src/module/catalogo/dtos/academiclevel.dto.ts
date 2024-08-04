import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";


export class AcademicLevelDto{
    @IsNumber()
    @IsOptional()
    readonly id: number;

    @IsString()
    @MaxLength(100)
    readonly academicLevel: string

    /*created_at: Date
    update_at: Date
    user_id: number
    user_update_id: number*/

}