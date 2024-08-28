import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'professions'})
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

    @ManyToOne(()=> Docentes, (docente)=> docente.profesion)
    docente:Docentes;

}