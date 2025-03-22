import { StudentEntity } from "../../createEstudents";
import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Centro } from "../../centroEducativo/entities/centro.entity";

@Entity({ schema: 'catalogos', name: 'departamento'})
export class Departamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: 'varchar',
            length: 100,
            name: 'departamento',
        })
    departamento: string

    @OneToMany(()=> Docentes, (docente)=> docente.departamento)
    docente?: Docentes;

    @OneToMany(()=> StudentEntity, (student)=> student.departamento)
    student?: StudentEntity;

    @OneToMany (() => Centro, (centro) => centro.departamento)
    centro?: Centro;


}