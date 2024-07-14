import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

}