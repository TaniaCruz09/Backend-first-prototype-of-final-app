import { RolesService } from '../services';
import { QueryParamsRolesDto } from '../dtos/query-params-roles.dto';
import { RoleDto } from '../dtos/roles.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getRoles(query: QueryParamsRolesDto): Promise<{
        data: import("../entities").Role[];
        message: string;
    }>;
    getRolesById(id: number): Promise<{
        data: import("../entities").Role;
        message: string;
    }>;
    createRole(payload: RoleDto): Promise<{
        data: import("../entities").Role;
    }>;
    updateRole(id: number, payload: RoleDto): Promise<{
        data: import("../entities").Role;
    }>;
    deleteRole(id: number): Promise<{
        data: import("../entities").Role;
        message: string;
    }>;
}
