import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turno } from './turnos.entity';
import { TurnoController } from './turnos.controller';
import { TurnoService } from './turnos.service';


@Module({
  imports: [TypeOrmModule.forFeature([Turno])],
  controllers: [TurnoController],
  providers: [TurnoService],
})
export class TurnoModule {}
