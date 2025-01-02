import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'catalogos', name: 'seccion'})
export class Seccion {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id: number;

    @Column({
        name: 'seccion',
        type: 'varchar',
        nullable: false,
        length: 50,
    })
    seccion: string;

    // @Column()
    // create_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // user_id: number;

    // @Column()
    // user_update_id: number;
}