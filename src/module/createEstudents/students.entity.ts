import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GenderEntity, Pais } from "../catalogo";

@Entity({ name: 'student'})
export class StudentEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?:number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    studentCode: string;

    @ManyToOne(()=> Pais, (pais)=> pais.id)
    @JoinColumn({name: 'pais_id'})
    pais: Pais;

    @ManyToOne(()=> GenderEntity, (gender)=> gender.id)
    @JoinColumn({name: 'genero_id'})
    gender: GenderEntity;
}