import { User } from "./user.entity";
export declare class Role {
    id?: number;
    role: string;
    users: User[];
    is_active: boolean;
    delete_at: Date;
}
