import { Injectable } from '@nestjs/common';

import { DataSource } from 'typeorm';
import { UserHasRolesDto } from '../dto/user-has-roles.dto';
import { UserEntity } from '../entity/users.entity';
import { RolesEntity } from '../entity/roles.entity';


@Injectable()
export class AsiggnRolesService {
  constructor(private readonly dataSource: DataSource) {}

  async asiggnRol(userId: number, payload: UserHasRolesDto) {
    const roles = await this.getNewsRolesByIds(payload.roles, userId);
    const user = await this.dataSource
      .getRepository(UserEntity)
      .findOne({ where: { id: userId }, relations: { roles: true } });

    const asignar = [...user.roles, ...roles];

    user.roles = asignar;

    const saved = await this.dataSource.getRepository(UserEntity).save(user);
    return saved;
  }

  async removerRol(userId: number, payload: UserHasRolesDto) {
    const roles = await this.getAllRolesByIds(payload.roles);
    const user = await this.dataSource
      .getRepository(UserEntity)
      .findOne({ where: { id: userId }, relations: { roles: true } });

    const remover = user.roles.filter((role) => {
      return !roles.find((r) => r.id === role.id);
    });

    user.roles = remover;

    const saved = await this.dataSource.getRepository(UserEntity).save(user);
    return saved;
  }

  async getNewsRolesByIds(roles: number[], userId: number): Promise<RolesEntity[]> {
    const list = this.dataSource
      .getRepository(RolesEntity)
      .createQueryBuilder('role')
      .where('role.id in (:...roles)', { roles })
      .andWhere((qb) => {
        const subQuery = qb
          .subQuery()
          .select(
            `
          case 
			      when "user_roles"."role_id" > 0 then "user_roles"."role_id"
		        else 0
	        end
          `,
          )
          .from(UserEntity, 'user')
          .leftJoin('user.roles', 'roles')
          .where('user.id = :id', { id: userId })
          .getQuery();

        return 'role.id not in ' + subQuery;
      });

    return await list.getMany();
  }

  async getAllRolesByIds(roles: number[]): Promise<RolesEntity[]> {
    const list = this.dataSource
      .getRepository(RolesEntity)
      .createQueryBuilder('role')
      .where('role.id in (:...roles)', { roles });

    return await list.getMany();
  }
}
