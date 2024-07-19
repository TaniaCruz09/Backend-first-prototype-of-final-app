import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
}