import { Grupos } from '../entities/grupos.entity';
import { Repository } from 'typeorm';
import { CreateGrupoDto } from '../dtos/grupos.dto';
import { UpdateGrupoDto } from '../dtos/Update-grupo.dto';
export declare class GruposService {
    private grupoRepository;
    constructor(grupoRepository: Repository<Grupos>);
    createGrupo(createGrupoDto: CreateGrupoDto): Promise<Grupos>;
    getGrupo(): Promise<Grupos[]>;
    getGrupoById(id: number): Promise<Grupos>;
    deleteGrupos(id: number): Promise<Grupos>;
    updateGrupos(id: number, payload: UpdateGrupoDto): Promise<Grupos>;
}
