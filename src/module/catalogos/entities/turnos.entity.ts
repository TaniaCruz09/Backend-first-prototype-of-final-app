import { Grupos } from "src/module/grupos/grupos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(()=> Grupos, (grupos) => grupos.turno)
    grupos?: Grupos[]

    // @Column()
    // create_at: Date;

    // @Column()
    // updated_at: Date;

    // @Column()
    // user_id: number;

    // @Column()
    // user_update_id: number;
    
}