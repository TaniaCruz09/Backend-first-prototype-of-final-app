import { Docentes } from "../../docentes/docentes.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";


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

}