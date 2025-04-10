import { StudentEntity } from "src/module/createEstudents";
import { Docentes } from "../../docentes/docentes.entity";
import { User } from "src/module/auth/entities";
export declare class GenderEntity {
    id?: number;
    gender: string;
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
    user_create: User;
    user_update: User;
    user_delete: User;
    docente: Docentes;
    student?: StudentEntity;
}
