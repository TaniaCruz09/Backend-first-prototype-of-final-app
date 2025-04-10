import { CreateGrupoConEstudiantesDto } from '../dtos/gruposConEstudiantes.dto';
import { UpdateGrupoConEstudiantesDto } from '../dtos/updateGruposConEstudiantes.dto';
import { GruposConEstudiantesService } from '../services/gruposConEstudiantes.service';
export declare class GruposConEstudiantesController {
    private readonly grupoService;
    constructor(grupoService: GruposConEstudiantesService);
    createGrupo(createGrupoDto: CreateGrupoConEstudiantesDto): Promise<{
        data: import("../entities/gruposConEstudiantes.entity").GruposConEstudiantes;
        message: string;
    }>;
    getgrupos(): Promise<{
        data: import("../entities/gruposConEstudiantes.entity").GruposConEstudiantes[];
        message: string;
    }>;
    getGruposById(id: number): Promise<{
        data: import("../entities/gruposConEstudiantes.entity").GruposConEstudiantes;
        message: string;
    }>;
    deleteGrupo(id: number): Promise<{
        data: import("../entities/gruposConEstudiantes.entity").GruposConEstudiantes;
        message: string;
    }>;
    updateGrupo(id: number, payload: UpdateGrupoConEstudiantesDto): Promise<{
        data: import("../entities/gruposConEstudiantes.entity").GruposConEstudiantes;
        message: string;
    }>;
}
