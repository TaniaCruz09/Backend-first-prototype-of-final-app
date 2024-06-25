import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student{
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
}