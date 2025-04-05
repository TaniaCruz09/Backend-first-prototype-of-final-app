import { StudentEntity } from 'src/module/createEstudents/students.entity';
import { Docentes } from '../../docentes/docentes.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'catalogos', name: 'pais' })
export class Pais {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'pais',
  })
  pais: string;

  // @OneToMany(()=> Docentes, (docente)=> docente.pais)
  // docente?: Docentes;

  // @OneToMany(()=> StudentEntity, (student)=> student.pais)
  // student?: StudentEntity;
}
