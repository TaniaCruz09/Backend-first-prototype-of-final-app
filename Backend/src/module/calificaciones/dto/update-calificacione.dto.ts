import { PartialType } from '@nestjs/swagger';
import { CreateCalificacionDto } from './create-calificacione.dto';

export class UpdateCalificacioneDto extends PartialType(CreateCalificacionDto) {}
