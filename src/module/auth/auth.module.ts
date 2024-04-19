import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RolesEntity } from "./entity/roles.entity";
import { RolesController } from "./controllers/roles.controller";
import { RolesService } from "./services/roles.service";
import { UserEntity } from "./entity/users.entity";
import { UserController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";


@Module({
    imports: [TypeOrmModule.forFeature([RolesEntity,UserEntity])],
    controllers: [RolesController,UserController],
    providers: [RolesService,UsersService],
})

export class RolesModule{}