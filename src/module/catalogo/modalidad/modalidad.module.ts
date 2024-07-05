import { Module } from "@nestjs/common";
import { Seccion } from "../seccion/seccion.entity";
import { SeccionController } from "../seccion/seccion.controller";
import { SeccionService } from "../seccion/seccion.service";
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([Seccion])],
    controllers: [SeccionController],
    providers: [SeccionService],
  })
  export class SecccioModule {}