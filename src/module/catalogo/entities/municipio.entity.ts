import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Municipio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            type: 'varchar',
            length: 100,
            name: 'municipio'
        }
    )
    municipio: string;
}