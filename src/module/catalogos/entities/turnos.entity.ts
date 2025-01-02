import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'catalogos', name: 'turno'})
export class Turno {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id: number;

    @Column({
        name: 'turno',
        type: 'varchar',
        // nullable: false,
        length: 50,
    })
    turno: string;

    // @Column()
    // create_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // user_id: number;

    // @Column()
    // user_update_id: number;
    
}