import { DataSource } from 'typeorm';
import { Role, User } from '../entities';
import { UserHasRolesDto } from '../dtos/user-has-roles';
export declare class AsignarRolesService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    asignarRol(userId: number, payload: UserHasRolesDto): Promise<User>;
    removerRol(userId: number, payload: UserHasRolesDto): Promise<User>;
    getNewsRolesByIds(roles: number[], userId: number): Promise<Role[]>;
    getAllRolesByIds(roles: number[]): Promise<Role[]>;
}
