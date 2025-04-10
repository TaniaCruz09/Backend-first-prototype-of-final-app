import { Grupos } from '../entities/grupos.entity';
export declare class CreateOrganizacionEscolarDTO {
    readonly id?: number;
    anio_lectivo: number;
    grupo?: Grupos[];
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
}
