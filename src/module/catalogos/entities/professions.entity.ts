import { User } from "src/module/auth/entities";
import { Docentes } from "../../docentes/docentes.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ schema: 'catalogos', name: 'professions' })
export class ProfessionsEntity {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
    id?: number;

    @Column({ name: 'profession', type: 'varchar', length: 100 })
    profession: string;

    @CreateDateColumn({ name: 'created_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;

    @UpdateDateColumn({ name: 'update_at', type: 'timestamp', onUpdate: "CURRENT_TIMESTAMP" })
    update_at: Date;

    @Column({ name: 'user_update_id', type: 'int4', nullable: true })
    user_update_id: number;

    @ManyToOne(() => User, (user) => user.id, { nullable: true })
    @JoinColumn({ name: 'user_update_id' })  // Se enlaza a la columna 'user_update_id'
    user: User;

    @ManyToMany(() => Docentes, (docente) => docente.profesion)
    docente: Docentes[];
}
