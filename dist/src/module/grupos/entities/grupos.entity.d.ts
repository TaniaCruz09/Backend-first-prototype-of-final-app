import { GradesEntity, Modalidad, Seccion, Turno } from '../../catalogos';
import { Docentes } from '../../docentes/docentes.entity';
import { GruposConEstudiantes } from './gruposConEstudiantes.entity';
import { User } from '../../../module/auth/entities';
import { OrganizacionEscolar } from './organizacionEscolar.entity.';
export declare class Grupos {
    id: number;
    grado: GradesEntity;
    seccion: Seccion;
    modalidad: Modalidad;
    turno: Turno;
    docente: Docentes;
    grupoConEstudiantes?: GruposConEstudiantes;
    organizacionEscolar: OrganizacionEscolar;
    anio_lectivo: number;
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
