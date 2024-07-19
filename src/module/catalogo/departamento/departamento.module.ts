import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Departamento } from "./departamento.entity";
import { DepartamentoController } from "./departamento.controller";
import { DepartamentoService } from "./departamento.service";

@Module({
    imports: [TypeOrmModule.forFeature([Departamento])],
    controllers: [DepartamentoController],
    providers: [DepartamentoService],
})
export class DepartamentoModule {}