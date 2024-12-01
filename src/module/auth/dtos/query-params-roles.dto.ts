import { IsOptional, IsString } from 'class-validator';

export class QueryParamsRolesDto {
  @IsOptional()
  @IsString()
  readonly role?: string;

  @IsOptional()
  @IsString()
  readonly is_active?: string;
}
