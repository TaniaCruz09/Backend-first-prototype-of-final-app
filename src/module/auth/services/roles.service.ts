import { Injectable, NotFoundException, Query } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { RolesEntity } from "../entity/roles.entity";
import { RolesDto } from "../dto/roles.dto";
import { Console } from "console";

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

    
      async getRoles(){
        const roles = await this.roleRepo.find();
        console.log(roles)
        return roles;
        
      }
      

      async getRolesById(id: number): Promise<RolesEntity> {
        const roles = await this.roleRepo.findOne({
          where: { id },
        });
    
        return roles;
      }

      async updateRole(id:number, payload:RolesDto ): Promise<RolesEntity>{
        const roles = await this.roleRepo.preload({id, ...payload });
        return await this.roleRepo.save(roles)
      }

      async deleteRoles (id:number): Promise<RolesEntity> {
        const roles = await this.roleRepo.findOne({
          where: {id: id}
        });
        
        return await this.roleRepo.remove(roles);
      }


}