import { Grupos } from '../../../module/grupos/entities/grupos.entity';
import { User } from '../../../module/auth/entities';
export declare class Modalidad {
    id: number;
    modalidad: string;
    grupos?: Grupos[];
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
