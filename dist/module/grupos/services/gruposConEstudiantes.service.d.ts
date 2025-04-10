import { Repository } from 'typeorm';
import { GruposConEstudiantes } from '../entities/gruposConEstudiantes.entity';
import { CreateGrupoConEstudiantesDto } from '../dtos/gruposConEstudiantes.dto';
import { UpdateGrupoConEstudiantesDto } from '../dtos/updateGruposConEstudiantes.dto';
export declare class GruposConEstudiantesService {
    private grupoRepository;
    constructor(grupoRepository: Repository<GruposConEstudiantes>);
    createGrupo(createGrupoDto: CreateGrupoConEstudiantesDto): Promise<GruposConEstudiantes>;
    getGrupo(): Promise<GruposConEstudiantes[]>;
    getGrupoById(id: number): Promise<GruposConEstudiantes>;
    deleteGrupos(id: number): Promise<GruposConEstudiantes>;
    updateGrupos(id: number, payload: UpdateGrupoConEstudiantesDto): Promise<GruposConEstudiantes>;
}
