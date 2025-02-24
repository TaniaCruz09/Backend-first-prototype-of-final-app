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
          const { email, password } = payload;
          console.log('Email recibido:', email);
          console.log('Contraseña ingresada:', password);
  
          const user = await this.usersServices.findByEmail(email);
          if (!user) {
              throw new UnauthorizedException('Usuario no encontrado');
          }
  
          console.log('Contraseña almacenada en BD:', user.password);
  
          // Comparar contraseñas
          const isMatch = await bcrypt.compare(password, user.password);
          console.log('Resultado bcrypt.compare:', isMatch);
  
          if (!isMatch) {
              throw new UnauthorizedException('Credenciales inválidas');
          }
  
          // Generar el token
          const payloadJwt = { sub: user.id, name: user.name };
          const token = await this.jwtService.signAsync(payloadJwt);
  
          return { user, token };
      } catch (error) {
          throw new InternalServerErrorException(error);
      }
  }
  
  }
  