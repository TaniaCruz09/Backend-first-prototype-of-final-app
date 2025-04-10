import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import {
  RolesService,
  UserService,
  AsignarRolesService,
  AuthService,
} from './services';
import {
  AuthController,
  RolesController,
  UsersController,
  AsignarRolesController,
} from './controllers';
import { User, Role } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
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
  controllers: [
    AuthController,
    RolesController,
    UsersController,
    AsignarRolesController,
  ],
  providers: [
    AuthService,
    UserService,
    JwtStrategy,
    RolesService,
    AsignarRolesService,
  ],
  exports: [AuthModule, TypeOrmModule, JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {}
