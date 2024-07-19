import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seccion } from './seccion.entity';
import { SeccionController } from './seccion.controller';
import { SeccionService } from './seccion.service';


@Module({
  imports: [TypeOrmModule.forFeature([Seccion])],
  controllers: [SeccionController],
  providers: [SeccionService],
})
export class SeccionModule {}
