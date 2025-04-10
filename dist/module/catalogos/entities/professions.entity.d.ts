import { User } from "src/module/auth/entities";
import { Docentes } from "../../docentes/docentes.entity";
export declare class ProfessionsEntity {
    id?: number;
    profession: string;
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
    user_create: User;
    user_update: User;
    user_delete: User;
    docente: Docentes[];
}
