import { Repository } from 'typeorm';
import { Centro } from './entities/centro.entity';
import { CreateCentroDto } from './dto/create-centro.dto';
import { UpdateCentroDto } from './dto/update-centro.dto';
export declare class CentroService {
    private centroReposiroty;
    constructor(centroReposiroty: Repository<Centro>);
    createCentro(createCentroDto: CreateCentroDto): Promise<Centro>;
    getCentro(): Promise<Centro[]>;
    getCentroById(id: number): Promise<Centro>;
    deleteCentro(id: number): Promise<Centro>;
    updateCentro(id: number, payload: UpdateCentroDto): Promise<Centro>;
}
