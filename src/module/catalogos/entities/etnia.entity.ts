import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'etnia'})
export class Etnia {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int4'
    })
    id: number;

    @Column({
        name: 'etnia',
        type: 'varchar',
        // nullable: false,
        length: 50,
    })
    etnia: string;

    // @Column()
    // create_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // user_id: number;

    // @Column()
    // user_update_id: number;
    
}