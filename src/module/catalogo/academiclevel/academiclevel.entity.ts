import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'academicLevel'})
export class AcademicLevelEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?: number;

    @Column({
        name: 'academicLevel',
        type: 'varchar',
        length:100
    })
    academicLevel:string

}