import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({schema: 'catalogos', name: 'professions'})
export class ProfessionsEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?: number;

    @Column({
        name: 'profession',
        type: 'varchar',
        length:100
    })
    profession:string

    @ManyToMany(()=> Docentes, (docente)=> docente.profesion)
    docente:Docentes[];

}