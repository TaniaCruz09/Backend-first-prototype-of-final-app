import { Repository } from 'typeorm';
import { Role } from '../entities';
import { RoleDto } from '../dtos/roles.dto';
import { QueryParamsRolesDto } from '../dtos/query-params-roles.dto';
export declare class RolesService {
    private readonly roleRepo;
    constructor(roleRepo: Repository<Role>);
    getRolesById(id: number): Promise<Role>;
    getRoles(query: QueryParamsRolesDto): Promise<Role[]>;
    createRole(payload: RoleDto): Promise<Role>;
    updateRole(id: number, payload: RoleDto): Promise<Role>;
    deleteRole(id: number): Promise<Role>;
}
