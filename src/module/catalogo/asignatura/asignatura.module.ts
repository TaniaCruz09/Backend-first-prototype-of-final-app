import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AsignaturaController } from "./asignatura.controller";
import { Asignatura } from "./asignatura.entity";
import { AsignaturaService } from "./asignatura.service";

@Module({
    imports: [TypeOrmModule.forFeature([Asignatura])],
    controllers: [AsignaturaController],
    providers: [AsignaturaService],
})
export class AsignaturaModule {}