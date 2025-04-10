import { GradesEntity, Modalidad, Seccion, Turno } from '../../catalogos';
import { Docentes } from '../../docentes/docentes.entity';
export declare class UpdateGrupoDto {
    readonly id?: number;
    grado?: GradesEntity;
    seccion?: Seccion;
    modalidad?: Modalidad;
    turno?: Turno;
    docente?: Docentes;
    user_create_id?: number;
    created_at?: Date;
    update_at?: Date;
    user_update_id?: number;
    deleted_at?: Date;
    deleted_at_id?: number;
}
