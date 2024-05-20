import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'teacher'})
export class TeacherEntity{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name:string

    @Column()
    lastName: string

    @Column()
    email: string
}