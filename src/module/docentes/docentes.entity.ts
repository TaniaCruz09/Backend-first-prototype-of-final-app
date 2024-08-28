import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AcademicLevelEntity, Departamento, GenderEntity, Municipio, Pais, ProfessionsEntity } from "../catalogo";

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

    @OneToOne(() => GenderEntity, (gender) => gender.docente)
    @JoinColumn()
    sexo: GenderEntity;

    @OneToMany(()=> AcademicLevelEntity, (academiclevel)=> academiclevel.docente)
    nivel_academico: AcademicLevelEntity[];

    @OneToMany(()=> ProfessionsEntity, (profesion)=> profesion.docente)
    profesion: ProfessionsEntity[];

    @Column({
        name:'telefono',
        type: "varchar",
        length: 12,
    })
    telefono: string;

    @Column({
        name: 'fecha_nacimiento',
        type: 'date',
    })
    fecha_nacimiento: Date
    
    @OneToOne(()=> Pais, (pais)=> pais.docente)
    @JoinColumn()
    pais: Pais

    @OneToOne(()=> Departamento, (departamento)=> departamento.docente)
    @JoinColumn()
    departamento: Departamento;

    @OneToOne(()=> Municipio, (municipio)=> municipio.docente)
    @JoinColumn()
    municipio: Municipio;

    @Column({
        name: 'direccion_domiciliar',
        type: 'varchar',
        length: 200
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
        length: 150
    })
    nombre_contacto_emergencia: string;

    @Column({
        name: 'telefono_contacto_emergencia',
        type: 'varchar',
        length: 12
    })
    telefono_contacto_emergencia: string;
}