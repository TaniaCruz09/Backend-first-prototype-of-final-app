import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { UserDto, UserPartialTypeDto } from "../dto/users.dto";
import { SetupEnum } from "../enums";
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entity/users.entity";
import { Repository } from "typeorm";


@Injectable()
export class UsersService{
    users: any[] = [];
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
      ) {}

    async created(payload: UserDto) {
        try {
          let { password } = payload;
    
          password = await bcrypt.hash(password, SetupEnum.SALTORROUND);
    
          const newUser = this.userRepository.create({ ...payload, password });
          return await this.userRepository.save(newUser);
        } catch (error) {
          throw new InternalServerErrorException(error);
        }
      }

      async getUsers() {
        const users = await this.userRepository.find();
        return users;
      }

      async getUserById(id: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
          where: { id },
        });
    
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
    
      async deleted (id:number): Promise<UserEntity> {
        const roles = await this.userRepository.findOne({
          where: {id: id}
        });
        
        return await this.userRepository.remove(roles);
      }
      
}