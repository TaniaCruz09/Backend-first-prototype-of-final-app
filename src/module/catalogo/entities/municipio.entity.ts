import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'municipio'})
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

    @OneToOne(()=> Docentes, (docente)=> docente.municipio)
    docente?: Docentes;
}