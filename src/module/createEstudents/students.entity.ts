import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Departamento, GenderEntity, Municipio, Pais } from "../catalogos";
import { GruposConEstudiantes } from "../grupos/entities/gruposConEstudiantes.entity";


@Entity({ name: 'student'})
export class StudentEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?:number;

    @Column({
        name: 'nombres',
        type: 'varchar',
        length: 50,
        nullable: true 
    })
    name: string;

    @Column({
        name: 'apellidos',
        type: 'varchar',
        length: 50,
        nullable: true 
    })
    lastName: string;

    @Column({
        name: 'codigo_estudiante',
        type: 'varchar',
        nullable: true 
    })
    studentCode: string;

    @Column({ 
        name: 'cedula_identidad',
        type: 'varchar',
        length: 16,
        nullable: true
     })
    identityCard: string;

    @Column({ 
        name: 'fecha_nacimiento',
        type: 'date',
        nullable: true 
    })
    dateBirt: Date;

    @ManyToOne(()=> Pais, (pais)=> pais.id)
    @JoinColumn({name: 'pais_id'})
    pais: Pais;

    @ManyToOne(()=> GenderEntity, (gender)=> gender.id)
    @JoinColumn({name: 'genero_id'})
    gender: GenderEntity;

    @ManyToOne(()=> Departamento, (departmento)=> departmento.id)
    @JoinColumn({name: 'departamento_id'})
    departamento: Departamento;

    @ManyToOne(()=> Municipio, (municipio)=> municipio.id)
    @JoinColumn({name: 'municipio_id'})
    municipio: Municipio;

    
    @Column({
        name: 'direccion_domiciliar',
        type: 'varchar',
        nullable: true 
    })
    address: string;

    @Column({ 
        name: 'Nombre_tutor',
        type: 'varchar',
        nullable: true 
    })
    tutorName: string;

    @Column({ 
        name: 'maestro_cedula_identidad',
        type: 'varchar',
        length: 16,
        nullable: true 
    })
    tutorIdentityCard: string;

    @Column({ 
        name: 'Numero',
        type: 'varchar',
        length: 8,
        nullable: true 
    })
    tutorPhoneNumber: string;

    @Column({ 
        name: 'observaciones',
        type: 'varchar',
        nullable: true
     })
    observations: string;

    @OneToMany(()=> GruposConEstudiantes, (grupoConEstudiantes) => grupoConEstudiantes.estudiante)
    grupoConEstudiantes?: GruposConEstudiantes;
}