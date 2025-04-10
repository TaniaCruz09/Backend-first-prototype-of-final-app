import { Grupos } from '../entities/grupos.entity';
import { StudentEntity } from '../../../module/createEstudents';
import { Asignatura } from 'src/module/catalogos';
export declare class CreateGrupoConEstudiantesDto {
    readonly id?: number;
    grupo: Grupos;
    estudiante: StudentEntity;
    asignatura: Asignatura;
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
}
