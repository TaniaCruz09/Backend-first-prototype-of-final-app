import { Injectable, Query } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { RolesEntity } from "../entity/roles.entity";
import { RolesDto } from "../dto/roles.dto";

@Injectable()
export class RolesService{
    constructor(
        @InjectRepository(RolesEntity)
        private readonly roleRepo: Repository<RolesEntity>,
      ) {}

      async created(payload: RolesDto) {
        const roles = await this.roleRepo.create(payload);
        return await this.roleRepo.save(roles);
      }

     /*
     Este metodo aun no funciona 
      async getRoles(query: RolesDto){
        console.log(query)
        const roles = await this.roleRepo.find();
        return roles;
      }
      */


}