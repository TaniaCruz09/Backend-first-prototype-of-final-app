import { GruposService } from '../services/grupos.service';
import { UpdateGrupoDto } from '../dtos/Update-grupo.dto';
import { CreateGrupoDto } from '../dtos/grupos.dto';
export declare class GruposController {
    private readonly grupoService;
    constructor(grupoService: GruposService);
    createGrupo(createGrupoDto: CreateGrupoDto): Promise<{
        data: import("../entities/grupos.entity").Grupos;
        message: string;
    }>;
    getgrupos(): Promise<{
        data: import("../entities/grupos.entity").Grupos[];
        message: string;
    }>;
    getGruposById(id: number): Promise<{
        data: import("../entities/grupos.entity").Grupos;
        message: string;
    }>;
    deleteGrupo(id: number): Promise<{
        data: import("../entities/grupos.entity").Grupos;
        message: string;
    }>;
    updateGrupo(id: number, payload: UpdateGrupoDto): Promise<{
        data: import("../entities/grupos.entity").Grupos;
        message: string;
    }>;
}
