import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./roles.entity";
import * as bcrypt from 'bcrypt';
import { ProfessionsEntity } from "src/module/catalogos";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn({name: 'id', type: 'int4'})
    id?: number;

    @Column({name: 'name', type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({name: 'email', type: 'varchar', length: 100, nullable: false, unique: true})
    email: string;

    @Column({name: 'password', type: 'varchar', length: 100, nullable: false, select: true,})
      password: string;

      @Column({ name: 'token', type: 'varchar', length: 500, nullable: true })
      token: string;

    @ManyToOne(()=> ProfessionsEntity, (user)=> user.user)
    user: ProfessionsEntity //ESTOY TRABAJANDO EN ESTO

    @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'user_has_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_user_id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_role_id',
    },
  })
  roles: Role[];
    @Column({name: 'is_active', type: 'boolean', nullable: false, default: true})
    isActive: boolean;

  
}