import { OrganizacionEscolar } from '../entities/organizacionEscolar.entity.';
import { Repository } from 'typeorm';
import { CreateOrganizacionEscolarDTO } from '../dtos/organizacionEscolar.dto';
export declare class OrganizacionEscolarService {
    private organizacionEscolarRepo;
    constructor(organizacionEscolarRepo: Repository<OrganizacionEscolar>);
    createOrganizacion(createOrganizacionDto: CreateOrganizacionEscolarDTO): Promise<OrganizacionEscolar>;
    getOrganizacion(): Promise<OrganizacionEscolar[]>;
    getOrganizacionById(id: number): Promise<OrganizacionEscolar>;
    editOrganizacion(id: number, payload: CreateOrganizacionEscolarDTO): Promise<OrganizacionEscolar>;
    deleteOrganizacion(id: number, userId: number): Promise<OrganizacionEscolar>;
}
