import { StudentEntity } from "src/module/createEstudents/students.entity";
import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pais {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: 'varchar',
            length: 30,
            name: 'pais',
        })
    pais: string

    @OneToOne(()=> Docentes, (docente)=> docente.pais)
    docente?: Docentes;

    @OneToMany(()=> StudentEntity, (student)=> student.pais)
    student?: StudentEntity;
}