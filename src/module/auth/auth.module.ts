import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RolesEntity } from "./entity/roles.entity";
import { RolesController } from "./controllers/roles.controller";
import { RolesService } from "./services/roles.service";
import { UserEntity } from "./entity/users.entity";
import { UserController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AuthService } from "./services/auth.service";
import { AsiggnRolesService } from "./services/asiggn-roles.service";
import { AuthController } from "./controllers/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { AsignarRolesController } from "./controllers/asiggn-roles.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature([RolesEntity,UserEntity,]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '2h',
          },
        };
      },
    }),
    
    ],
    
    controllers: [RolesController,UserController, AuthController, AsignarRolesController],
    providers: [RolesService,UsersService,JwtStrategy,AuthService, AsiggnRolesService],

    exports: [AuthModule, TypeOrmModule, JwtStrategy, PassportModule, JwtModule],
})

export class AuthModule{}