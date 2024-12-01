import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(()=> Docentes, (docente)=> docente.pais)
    docente?: Docentes;
}