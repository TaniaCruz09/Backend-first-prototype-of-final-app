import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./roles.entity";
import * as bcrypt from 'bcrypt';

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn({name: 'id', type: 'int4'})
    id?: number;

    @Column({name: 'name', type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({name: 'email', type: 'varchar', length: 100, nullable: false, unique: true})
    email: string;

    @Column({name: 'password', type: 'varchar', length: 100, nullable: false, select: false,})
      password: string;

    @Column({name: 'toke', type: 'varchar', length: 200, nullable: true})
    token: string;

    @ManyToMany(()=> Role, (role) => role.users)
    @JoinTable({})
    roles: Role[];

    @Column({name: 'is_active', type: 'boolean', nullable: false, default: true})
    isActive: boolean;

    @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}