import { Module } from '@nestjs/common';
import { GruposController } from './grupos.controller';
import { GruposService } from './grupos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from './grupos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grupos])],
  controllers: [GruposController],
  providers: [GruposService]
})
export class GruposModule {}
