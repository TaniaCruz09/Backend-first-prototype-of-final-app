import { StudentEntity } from "src/module/createEstudents";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Grupos } from "./grupos.entity";

@Entity({name: 'grupoConEstudiantes'})
export class GruposConEstudiantes {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int2'
    })
    id: number;

    @ManyToOne(()=> Grupos, (grupo) => grupo.grupoConEstudiantes)
    grupo: Grupos;

    @ManyToOne(()=> StudentEntity, (estudiante) => estudiante.grupoConEstudiantes)
    estudiante: StudentEntity; 

}