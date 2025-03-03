import { User } from "src/module/auth/entities";
import { Docentes } from "../../docentes/docentes.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as moment from "moment-timezone";


@Entity({ schema: 'catalogos', name: 'professions' })
export class ProfessionsEntity {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
    id?: number;

    @Column({ name: 'profession', type: 'varchar', length: 100 })
    profession: string;

    @CreateDateColumn({ name: 'created_at', type: "timestamp", 
        default: () => "CURRENT_TIMESTAMP",  // Guarda la fecha en UTC por defecto
        transformer: {
            to: (value: Date) => value,  // Guarda la fecha tal como es
            from: (value: Date) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A')  // Formatea a hora de Nicaragua
        }
     })
    created_at: Date;

    @UpdateDateColumn({ name: 'update_at', type: 'timestamp', onUpdate: "CURRENT_TIMESTAMP", 
        transformer: {
            to: (value: Date) => value, 
            from: (value: Date) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A')
        }
    })
    update_at: Date;

    @Column({ name: 'user_update_id', type: 'int4', nullable: true })
    user_update_id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_update_id' })  // Se enlaza a la columna 'user_update_id'
    user: User;

    @ManyToMany(() => Docentes, (docente) => docente.profesion)
    docente: Docentes[];
}
