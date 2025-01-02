import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: 'catalogos', name: 'asignatura' })
export class Asignatura {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: 'varchar',
            length: 50,
            name: 'asignatura',
        })
    asignatura: string
}