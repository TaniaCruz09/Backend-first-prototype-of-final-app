import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ schema: 'catalogos', name: 'academicLevel' })
export class AcademicLevelEntity{
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'int4',
    })
    id?: number;

    @Column({
        name: 'academicLevel',
        type: 'varchar',
        length:100
    })
    academicLevel:string

    @ManyToMany(()=> Docentes, (docente)=> docente.nivel_academico)
    docente: Docentes[];

}