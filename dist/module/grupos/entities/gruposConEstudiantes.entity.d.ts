import { StudentEntity } from 'src/module/createEstudents';
import { Grupos } from './grupos.entity';
import { User } from '../../../module/auth/entities';
import { Asignatura } from 'src/module/catalogos';
export declare class GruposConEstudiantes {
    id: number;
    grupo: Grupos;
    estudiante: StudentEntity;
    asignatura: Asignatura;
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
    user_create: User;
    user_update: User;
    user_delete: User;
}
