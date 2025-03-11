import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from './entities/grupos.entity';
import { GruposConEstudiantes } from './entities/gruposConEstudiantes.entity';
import { GruposController } from './controllers/grupos.controller';
import { GruposConEstudiantesController } from './controllers/gruposConEstudiantes.controller';
import { GruposConEstudiantesService } from './services/gruposConEstudiantes.service';
import { GruposService } from './services/grupos.service';


@Module({
  imports: [TypeOrmModule.forFeature([Grupos, GruposConEstudiantes])],
  controllers: [GruposController, GruposConEstudiantesController],
  providers: [GruposService, GruposConEstudiantesService]
})
export class GruposModule {}
