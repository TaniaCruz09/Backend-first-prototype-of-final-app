import {
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
  } from '@nestjs/common';
  import * as bcrypt from 'bcrypt';
  import { AuthDto } from '../dtos/auth.dto';
  
  import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
  
  
  @Injectable()
  export class AuthService {
    constructor(
      private readonly usersServices: UserService,
      private readonly jwtService: JwtService,
    ) {}
    async signIn(payload: AuthDto) {
      try {
        //TODO: Buscar el usuario por el email
        const { password, ...user } = await this.usersServices.findByEmail(
          payload.email,
        );
  
        //TODO: Comparar el password
        const isMatch: boolean = await bcrypt.compare(payload.password, password);
        if (!isMatch) {
          throw new UnauthorizedException('Credenciales inválidas');
        }
  
        //TODO: Generar el token
        // Creando el payload del JWT para el usuario
        const payloadJwt = {
          sub: user.id,
          name: user.name,
        };
  
        // Generando el token con el payload
        const token = await this.jwtService.signAsync(payloadJwt);
  
        return {
          user,
          isMatch,
          token,
        };
      } catch (error) {
        throw new InternalServerErrorException(error);
      }
    }
  }
  