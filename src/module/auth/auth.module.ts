import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RolesEntity } from "./entity/roles.entity";
import { RolesController } from "./controllers/roles.controller";
import { RolesService } from "./services/roles.service";


@Module({
    imports: [TypeOrmModule.forFeature([RolesEntity])],
    controllers: [RolesController],
    providers: [RolesService],
})

export class RolesModule{}