import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  AcademicLevelEntity,
  Departamento,
  GenderEntity,
  Municipio,
  Pais,
  ProfessionsEntity,
} from '../catalogos';
import { Grupos } from '../grupos/entities/grupos.entity';
import { User } from '../../module/auth/entities';
import moment from 'moment';

@Entity({ name: 'docentes' })
export class Docentes {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int2',
  })
  id: number;

  @Column({
    name: 'nombres',
    type: 'varchar',
    length: 100,
  })
  nombres: string;

  @Column({
    name: 'apellido_paterno',
    type: 'varchar',
    length: 50,
  })
  apellido_paterno: string;

  @Column({
    name: 'apellido_materno',
    type: 'varchar',
    length: 50,
  })
  apellido_materno: string;

  @Column({
    name: 'cedula_identidad',
    type: 'varchar',
    length: 16,
  })
  cedula_identidad: string;

    @Column({
        name:'telefono',
        type: "varchar",
        nullable: true 
    })
    telefono: string;

    @Column({
        name: 'fecha_nacimiento',
        type: 'date',
    })
    fecha_nacimiento: Date

    @Column({
        name: 'direccion_domiciliar',
        type: 'varchar',
    })
    direccion_domiciliar: string;

    @Column({
        name: 'fechaContratado',
        type: 'date',
    })
    fechaContratado: Date;

    @Column({
        name: 'nombre_contacto_emergencia',
        type: 'varchar',
    })
    nombre_contacto_emergencia: string;

    @Column({
        name: 'telefono_contacto_emergencia',
        type: 'varchar',
        nullable: true 
    })
    telefono_contacto_emergencia: string;

    @ManyToOne(() => GenderEntity, (gender) => gender.docente)
    @JoinColumn()
    sexo: GenderEntity;

  @ManyToMany(
    () => AcademicLevelEntity,
    (academiclevel) => academiclevel.docente,
  )
  @JoinColumn({ name: 'nivel_academico_id' })
  nivel_academico: AcademicLevelEntity[];

  @ManyToMany(() => ProfessionsEntity, (profesion) => profesion.docente)
  @JoinColumn({ name: 'profesion_id' })
  profesion: ProfessionsEntity[];


  @ManyToOne(() => Pais, (pais) => pais.docente)
  @JoinColumn({ name: 'pais_id' })
  pais: Pais;

  @ManyToOne(() => Departamento, (departamento) => departamento.docente)
  @JoinColumn({ name: 'departamente_id' })
  departamento: Departamento;

  @ManyToOne(() => Municipio, (municipio) => municipio.docente)
  @JoinColumn({ name: 'municipio_id' })
  municipio: Municipio;

  @OneToMany(() => Grupos, (grupo) => grupo.docente)
  @JoinColumn({ name: 'grupo_id' })
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