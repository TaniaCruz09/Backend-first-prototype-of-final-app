import { Grupos } from "../../../module/grupos/grupos.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'catalogos', name: 'modalidad'})
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

    @OneToMany(()=> Grupos, (grupo)=> grupo.modalidad)
    grupos?: Grupos[];

    // @Column()
    // create_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // user_id: number;

    // @Column()
    // user_update_id: number;
    
}