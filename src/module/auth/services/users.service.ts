import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities";
import { Repository } from "typeorm";
import { UserPartialTypeDto, UsersDto } from "../dtos/users-dto";
import { SetupEnum } from "../enums";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
    users: any[] = [];

    //Inyectamos el servicion de users
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,  // <-- INYECTAR JwtService
     ) {}

     countItems(){
        return this.users.length;
     }

     async findByEmail(email:string) {
        const user = await this.userRepository.findOne({
            where: {email},
            select: {
                id: true,
                email: true,
                name: true,
                password: true
            },
        });

        if (!user) {
            throw new NotFoundException('No se encotro el usuario');
        }
        return user;
     }

     async created(payload: UsersDto) {
      try {
          let { password, email, name } = payload;
  
          console.log('Contraseña ingresada antes de hash:', password);
  
          // Hashear la contraseña antes de guardar
          password = await bcrypt.hash(password, SetupEnum.SALTORROUND);
  
          console.log('Contraseña hasheada antes de guardar:', password);
  
          // Crear usuario
          const newUser = this.userRepository.create({ name, email, password });
          const savedUser = await this.userRepository.save(newUser);
  
          // Generar el token
          const token = await this.jwtService.signAsync({
              sub: savedUser.id,
              name: savedUser.name,
              email: savedUser.email,
          });
  
          // Guardar el token en la BD
          savedUser.token = token;
          await this.userRepository.save(savedUser);
  
          return { user: savedUser, token };
      } catch (error) {
          throw new InternalServerErrorException(error);
      }
  }
    
      async getUsers() {
        const users = await this.userRepository.find();
        return users;
      }
    
      async getUser(id: number) {
        const user = await this.userRepository.findOne({ where: { id: id } });
        return user;
      }
    
      async updated(id: number, payload: UserPartialTypeDto) {
        const oldUser = await this.userRepository.findOne({ where: { id: id } });
        if (!oldUser) {
          throw new NotFoundException('No se encontro el usuario');
        }
    
        const merged = this.userRepository.merge(oldUser, payload);
        return await this.userRepository.save(merged);
      }
    
      deleted(id: number) {
        const index = this.users.findIndex((user) => user.id === id);
        this.users.splice(index, 1);
        return 'Usuario eliminado con éxito';
      }
}