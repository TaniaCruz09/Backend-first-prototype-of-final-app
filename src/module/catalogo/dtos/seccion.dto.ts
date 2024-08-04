import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateSeccionDTO {
    @IsOptional()
    @IsNumber()
    id:number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    seccion: string;

//   @IsOptional()
//   @IsDate()
//   create_at: Date;

//   @IsOptional()
//   @IsDate()
//   updated_at: Date;

//   @IsOptional()
//   @IsDate()
//   user_id: number;

//   @IsOptional()
//   @IsDate()
//   user_update_id: number;
}