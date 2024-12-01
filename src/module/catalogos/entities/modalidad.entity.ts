import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'modalidad'})
export class Modalidad {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id: number;

    @Column({
        name: 'modalidad',
        type: 'varchar',
        // nullable: false,
        length: 50,
    })
    modalidad: string;

    // @Column()
    // create_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // user_id: number;

    // @Column()
    // user_update_id: number;
    
}