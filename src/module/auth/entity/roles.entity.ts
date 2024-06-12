 import {
   PrimaryGeneratedColumn,
    Column,
    Entity,
    ManyToMany,

 }from 'typeorm';
import { UserEntity } from './users.entity';
 
 @Entity({ name: 'roles' })

 export class RolesEntity{
   @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ name: 'role', type: 'varchar', length: 50, nullable: false })
  role: string;

  @ManyToMany(()=> UserEntity, (users) => users.roles)
  users: UserEntity[];
 }