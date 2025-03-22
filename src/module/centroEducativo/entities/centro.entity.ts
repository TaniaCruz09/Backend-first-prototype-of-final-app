import { User } from "../../auth/entities";
import { Departamento, Municipio } from "../../catalogos";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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
    departamento: Departamento

    @ManyToOne (() => Municipio, (municipio) => municipio.centro)
    @JoinColumn ({name: 'municipio'})
    municipio: Municipio
}

