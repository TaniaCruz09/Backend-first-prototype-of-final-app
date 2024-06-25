import { IsString } from 'class-validator';

export class CatalogoDto {
  @IsString()
  buscar: string;
}
