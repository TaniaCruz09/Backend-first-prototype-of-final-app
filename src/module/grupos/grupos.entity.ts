import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GradesEntity, Modalidad, Seccion, Turno } from "../catalogos";
import { Docentes } from "../docentes/docentes.entity";

@Entity({name: 'grupos'})
export class Grupos {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int2'
    })
    id: number;

    @Column({name: 'anio_lectivo', type: 'int2'})
    anio_lectivo: number;

    @ManyToOne(()=> GradesEntity, (grado) => grado.grupos)
    grado: GradesEntity;

    @ManyToOne(()=> Seccion, (seccion)=> seccion.grupos)
    seccion: Seccion;

    @ManyToOne(() => Modalidad, (modalidad) => modalidad.grupos)
    modalidad: Modalidad;

    @ManyToOne(()=> Turno, (turno)=> turno.grupos)
    turno: Turno;

    @ManyToOne(()=> Docentes, (docente) => docente.grupos)
    docente: Docentes;

}