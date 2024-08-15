import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pais } from "../catalogo";

@Entity()
export class StudentEntity{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    gender: string;

    @Column()
    studentCode: string;

    @OneToOne(()=> Pais)
    @JoinColumn({ name: 'nationality_id'})
    nationality: Pais
}