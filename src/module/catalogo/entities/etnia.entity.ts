import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Etnia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    etnia: string;

    @Column()
    create_at: Date;

    @Column()
    updated_at: Date;

    @Column()
    user_id: number;

    @Column()
    user_update_id: number;
    
}