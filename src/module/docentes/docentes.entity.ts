import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AcademicLevelEntity, Departamento, GenderEntity, Municipio, Pais, ProfessionsEntity } from "../catalogos";
import { Grupos } from "../grupos/entities/grupos.entity";

@Entity({name: 'docentes'})
export class Docentes {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int2'
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
        length: 50
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

    @OneToMany(()=> Grupos, (grupo) => grupo.docente)
    grupos?: Grupos[];

    @ManyToOne(() => GenderEntity, (gender) => gender.docente)
    @JoinColumn()
    sexo: GenderEntity;

    @ManyToMany(()=> AcademicLevelEntity, (academiclevel)=> academiclevel.docente)
        @JoinTable({
            name: 'docente-nivelAcademico', // Nombre de la tabla de unión
            joinColumn: {
              name: 'maestro_id',
              referencedColumnName: 'id',
            },
            inverseJoinColumn: {
              name: 'profesion_id',
              referencedColumnName: 'id',
            },
          })
    nivel_academico: AcademicLevelEntity[];

    @ManyToMany(()=> ProfessionsEntity, (profesion)=> profesion.docente)
    @JoinTable({
        name: 'docente-profesiones', // Nombre de la tabla de unión
        joinColumn: {
          name: 'maestro_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'profesion_id',
          referencedColumnName: 'id',
        },
      })
    profesion: ProfessionsEntity[];

    @ManyToOne(()=> Pais, (pais)=> pais.docente)
    @JoinColumn()
    pais: Pais

    @ManyToOne(()=> Departamento, (departamento)=> departamento.docente)
    @JoinColumn()
    departamento: Departamento;

    @ManyToOne(()=> Municipio, (municipio)=> municipio.docente)
    @JoinColumn()
    municipio: Municipio;
}