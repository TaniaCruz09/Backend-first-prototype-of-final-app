import moment from "moment";
import { User } from "../../auth/entities";
import { Departamento, Municipio } from "../../catalogos";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity({ name: 'centro' })
export class Centro {
    @PrimaryGeneratedColumn('increment', {
        name: 'id',
        type: 'int4',
    })
    id?: number;

    @Column({
        name: 'nombre_centro',
        type: 'varchar',
        length: 255,
    })
    nombreCentro: string;

    @Column({
        name: 'codigo_establecimiento',
        type: 'varchar',
        length: 50,
        unique: true,
    })
    codigoEstablecimiento: string;

    @Column({
        name: 'codigo_centro',
        type: 'varchar',
        length: 50,
        unique: true,
    })
    codigoCentro: string;

    @Column({
        name: 'direccion_centro',
        type: 'text',
    })
    direccionCentro: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => User, (user) => user.id, { nullable: true })
    @JoinColumn({ name: 'user_update_id' })
    userUpdate?: User;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt?: Date;

    @ManyToOne (() => Departamento, (departamento) => departamento.centro)
    @JoinColumn ({name: 'departamento'})
    departamento: Departamento;

    @ManyToOne (() => Municipio, (municipio) => municipio.centro)
    @JoinColumn ({name: 'municipio'})
    municipio: Municipio;

    // ID del Usuario que creo el registro
            @Column({ name: 'user_create_id', type: 'int4' ,nullable: true }) 
            user_create_id: number;
        
            // Fecha y Hora en el que se creo el registro
            @CreateDateColumn({ name: 'created_at', type: "timestamp", 
                default: () => "CURRENT_TIMESTAMP",  // Guarda la fecha en UTC por defecto
                transformer: {
                    to: (value: Date) => value,  // Guarda la fecha tal como es
                    from: (value: Date) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A')  // Formatea a hora de Nicaragua
                }
                })
            created_at: Date;
        
            //Fecha y Hora de la ultima actualizacion del registro
            @UpdateDateColumn({ name: 'update_at', type: 'timestamp', onUpdate: "CURRENT_TIMESTAMP", 
                transformer: {
                    to: (value: Date) => value, 
                    from: (value: Date) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A')
                }
            })
            update_at: Date;
        
            //ID del Usuario que realizo la ultima actualización
            @Column({ name: 'user_update_id', type: 'int4', nullable: true })
            user_update_id: number;
        
            //Fecha y Hora en el que el registro fue eliminado
            @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
            deleted_at: Date;
        
            //ID del Usuario que elimino el registro
            @Column({ name: 'deleted_at_id', type: 'int4', nullable: true })
            deleted_at_id: number;
        
            @ManyToOne(() => User, (user) => user.id)
            @JoinColumn({ name: 'user_create_id' })  // Se enlaza con el usuario que creó el registro
            user_create: User;
        
            @ManyToOne(() => User, (user) => user.id)
            @JoinColumn({ name: 'user_update_id', })  // Se enlaza a la columna 'user_update_id'
            user_update: User;
        
            @ManyToOne(() => User, (user) => user.id)
            @JoinColumn({ name: 'deleted_at_id' })  // Se enlaza con el usuario que eliminó el registro
            user_delete: User;
}

