import { Module } from '@nestjs/common';
import { CentroService } from './centro.service';
import { CentroController } from './centro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Centro } from './entities/centro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Centro])],
  controllers: [CentroController],
  providers: [CentroService],
})
export class CentroModule {}
