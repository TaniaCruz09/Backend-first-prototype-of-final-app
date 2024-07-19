import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Municipio } from "./municipio.entity";
import { MunicipioService } from "./municipio.service";
import { MunicipioController } from "./municipio.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Municipio])],
    controllers: [MunicipioController],
    providers: [MunicipioService],
})
export class PaisModule {}