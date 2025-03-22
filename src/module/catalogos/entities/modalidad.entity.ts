import moment from 'moment';
import { Grupos } from '../../../module/grupos/entities/grupos.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../../module/auth/entities';

@Entity({ schema: 'catalogos', name: 'modalidad' })
export class Modalidad {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int4',
  })
  id: number;

<<<<<<< HEAD
    @Column({
        name: 'modalidad',
        type: 'varchar',
        // nullable: false,
        //length: 50,
    })
    modalidad: string;
=======
  @Column({
    name: 'modalidad',
    type: 'varchar',
    // nullable: false,
    length: 50,
  })
  modalidad: string;
>>>>>>> 2d3fe51b1e0083e5c3be45878aa01b7d6af780f2

  @OneToMany(() => Grupos, (grupo) => grupo.modalidad)
  grupos?: Grupos[];

  //ID del usuario que creó el registro
  @Column({ name: 'user_create_id', type: 'int4', nullable: true }) // Nuevo campo
  user_create_id: number;

  // Fecha y hora en que se creó el registro
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP', // Guarda la fecha en UTC por defecto
    transformer: {
      to: (value: Date) => value, // Guarda la fecha tal como es
      from: (value: Date) =>
        moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A'), // Formatea a hora de Nicaragua
    },
  })
  created_at: Date;

  // Fecha y hora de la última actualización del registro
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
    transformer: {
      to: (value: Date) => value,
      from: (value: Date) =>
        moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A'),
    },
  })
  update_at: Date;

  // ID del usuario que realizó la última actualización del registro
  @Column({ name: 'user_update_id', type: 'int4', nullable: true })
  user_update_id: number;

  // Fecha y hora en que el registro fue eliminado
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at: Date;

  // ID del usuario que elimino el registro
  @Column({ name: 'deleted_at_id', type: 'int4', nullable: true })
  deleted_at_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_create_id' }) // Se enlaza con el usuario que creó el registro
  user_create: User;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_update_id' }) // Se enlaza a la columna 'user_update_id'
  user_update: User;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'deleted_at_id' }) // Se enlaza con el usuario que eliminó el registro
  user_delete: User;
}
