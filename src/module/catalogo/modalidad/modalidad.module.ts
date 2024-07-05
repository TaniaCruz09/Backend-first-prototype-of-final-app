import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Seccion } from "../seccion/seccion.entity";
import { SeccionController } from "../seccion/seccion.controller";
import { SeccionService } from "../seccion/seccion.service";

@Module({
    imports: [TypeOrmModule.forFeature([Seccion])],
    controllers: [SeccionController],
    providers: [SeccionService],
  })
  export class SecccioModule {}