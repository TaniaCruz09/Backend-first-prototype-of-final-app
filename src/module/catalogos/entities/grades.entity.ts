import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({schema: 'catalogos', name: 'grades'})
export class GradesEntity{
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id?: number;

    @Column({
        name: 'grades',
        type: 'varchar',
        length:100
    })
    grades:string
}