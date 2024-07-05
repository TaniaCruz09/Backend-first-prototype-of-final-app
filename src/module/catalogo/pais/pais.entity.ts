import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pais {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: 'varchar',
            length: 30,
            name: 'pais',
        })
    pais: string
}