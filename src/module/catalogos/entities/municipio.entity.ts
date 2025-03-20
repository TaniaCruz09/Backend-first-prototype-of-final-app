import { StudentEntity } from "src/module/createEstudents";
import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Centro } from "../../centroEducativo/entities/centro.entity";

@Entity({schema: 'catalogos', name: 'municipio'})
export class Municipio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: 'varchar',
            length: 100,
            name: 'municipio'
        }
    )
    municipio: string;

    @OneToMany(()=> Docentes, (docente)=> docente.municipio)
    docente?: Docentes;

    @OneToMany(()=> StudentEntity, (student)=> student.municipio)
    student?: StudentEntity; 

    @OneToMany (()=> Centro, (centro)=> centro.municipio)
    centro?: Centro


}