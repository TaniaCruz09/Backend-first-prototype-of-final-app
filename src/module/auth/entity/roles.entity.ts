 import {
   PrimaryGeneratedColumn,
    Column,
    Entity,

 }from 'typeorm';
 
 @Entity({ name: 'roles' })

 export class RolesEntity{
   @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column({ name: 'role', type: 'varchar', length: 50, nullable: false })
  role: string;
 }