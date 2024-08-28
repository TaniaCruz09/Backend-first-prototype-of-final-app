import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'academicLevel'})
export class AcademicLevelEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?: number;

    @Column({
        name: 'academicLevel',
        type: 'varchar',
        length:100
    })
    academicLevel:string

    @ManyToOne(()=> Docentes, (docente)=> docente.nivel_academico)
    docente: Docentes;

}