import {StudentEntity } from "src/module/createEstudents/students.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(()=> StudentEntity, (student)=> student.id)
    student: StudentEntity;
}