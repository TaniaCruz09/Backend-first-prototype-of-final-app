import { Column, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({name: 'roles'})
export class Role {
    @PrimaryGeneratedColumn({name: 'id', type: 'int4'})
    id?: number;

    @Column({name: 'role', type: 'varchar', length: 50, nullable: true})
    role: string;

    @ManyToMany(()=> User, (user)=> user.roles)
    users: User[];

    @Column({
        name: 'is_active',
        type: 'boolean',
        nullable: false,
        default: true,
      })
      is_active: boolean;
    
      @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
      delete_at: Date;
}