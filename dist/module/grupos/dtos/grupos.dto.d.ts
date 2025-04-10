import { GradesEntity, Modalidad, Seccion, Turno } from '../../catalogos';
import { Docentes } from '../../docentes/docentes.entity';
import { GruposConEstudiantes } from '../entities/gruposConEstudiantes.entity';
import { OrganizacionEscolar } from '../entities/organizacionEscolar.entity.';
export declare class CreateGrupoDto {
    readonly id?: number;
    grado: GradesEntity;
    seccion: Seccion;
    modalidad: Modalidad;
    turno: Turno;
    docente: Docentes;
    organizacionEscolar?: OrganizacionEscolar;
    grupoConEstudiantes?: GruposConEstudiantes;
    anio_lectivo: number;
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
}
