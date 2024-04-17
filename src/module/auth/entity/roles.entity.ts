 import {
   PrimaryGeneratedColumn,
    Column,
    Entity,

 }from 'typeorm';
 
 @Entity({ name: 'roles' })

 export class RolesEntity{
   @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  role: string;

  
 }