import { OrganizacionEscolarService } from '../services/organizacionEscolar.service';
import { CreateOrganizacionEscolarDTO } from '../dtos/organizacionEscolar.dto';
export declare class OrganizacionEscolarController {
    private readonly organizacionService;
    constructor(organizacionService: OrganizacionEscolarService);
    createOrganizacion(createOrganizacionDTO: CreateOrganizacionEscolarDTO, req: any): Promise<{
        data: import("../entities/organizacionEscolar.entity.").OrganizacionEscolar;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    getOrganizacion(): Promise<{
        data: import("../entities/organizacionEscolar.entity.").OrganizacionEscolar[];
        message: string;
    }>;
    getOrganizacionById(id: number): Promise<{
        data: import("../entities/organizacionEscolar.entity.").OrganizacionEscolar;
        message: string;
    }>;
    editarOrganizacion(id: number, payload: CreateOrganizacionEscolarDTO, req: any): Promise<{
        data: import("../entities/organizacionEscolar.entity.").OrganizacionEscolar;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
    deleteOrganizacion(id: number, req: any): Promise<{
        data: import("../entities/organizacionEscolar.entity.").OrganizacionEscolar;
        message: string;
    } | {
        message: string;
        statusCode: number;
    }>;
}
