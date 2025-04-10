import { Docentes } from './docentes.entity';
import { Repository } from 'typeorm';
import { DocentesDTO } from './docentes.dto';
export declare class DocentesService {
    private readonly docenteRepository;
    constructor(docenteRepository: Repository<Docentes>);
    createDocente(createDocenteDto: DocentesDTO): Promise<Docentes>;
    getDocente(): Promise<Docentes[]>;
    getDocenteById(id: number): Promise<Docentes>;
    editDocente(id: number, payload: DocentesDTO): Promise<Docentes>;
    deleteDocente(id: number, userId: number): Promise<Docentes>;
}
