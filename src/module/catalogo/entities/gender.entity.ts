import { StudentEntity } from "src/module/createEstudents";
import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'gender'})
export class GenderEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?: number;

    @Column({
        name: 'gender',
        type: 'varchar',
        length:100
    })
    gender:string

    @OneToOne(() => Docentes, (docente) => docente.sexo)
    docente: Docentes;

    @OneToMany(()=> StudentEntity, (student)=> student.gender)
    student?: StudentEntity;

}