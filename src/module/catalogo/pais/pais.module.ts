import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pais } from './pais.entity';
import { PaisController } from "./pais.controller";
import { PaisService } from "./pais.service";

@Module({
    imports: [TypeOrmModule.forFeature([Pais])],
    controllers: [PaisController],
    providers: [PaisService],
})
export class PaisModule {}