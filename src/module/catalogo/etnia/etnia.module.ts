import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etnia } from './etnia.entity';
import { EtniaService } from './etnia.service';
import { EtniaController } from './etnia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Etnia])],
  controllers: [EtniaController],
  providers: [EtniaService],
})
export class EtniaModule {}
