import { AsignarRolesService } from '../services';
import { UserHasRolesDto } from '../dtos/user-has-roles';
export declare class AsignarRolesController {
    private readonly asignarRolesRepo;
    constructor(asignarRolesRepo: AsignarRolesService);
    asignarRol(userId: number, payload: UserHasRolesDto): Promise<import("../entities").User>;
    removerRol(userId: number, payload: UserHasRolesDto): Promise<import("../entities").User>;
}
