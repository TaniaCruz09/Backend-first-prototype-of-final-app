import { StudentEntity } from "src/module/createEstudents";
import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('departamento')
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

    @OneToOne(()=> Docentes, (docente)=> docente.departamento)
    docente?: Docentes;

    @OneToMany(()=> StudentEntity, (student)=> student.departamento)
    student?: StudentEntity;
}