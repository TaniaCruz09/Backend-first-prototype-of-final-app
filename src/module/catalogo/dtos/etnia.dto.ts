import { IsDate, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, MaxLength } from "class-validator";

export class createEtniaDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  etnia: string;

  // @IsOptional()
  // @IsDate()
  // create_at: Date;

  // @IsOptional()
  // @IsDate()
  // updated_at: Date;

  // @IsOptional()
  // @IsDate()
  // user_id: number;

  // @IsOptional()
  // @IsDate()
  // user_update_id: number;


}