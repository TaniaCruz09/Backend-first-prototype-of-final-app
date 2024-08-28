import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
}