import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ModalidadService } from "./modalidad.service";
import { ModalidadController } from "./modalidades.controller";
import { Modalidad } from "./modalidad.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Modalidad])],
    controllers: [ModalidadController],
    providers: [ModalidadService],
  })
  export class MOdalidadModule {}