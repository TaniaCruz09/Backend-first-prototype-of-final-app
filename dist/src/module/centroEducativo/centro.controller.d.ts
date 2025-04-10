import { CreateCentroDto } from './dto/create-centro.dto';
import { UpdateCentroDto } from './dto/update-centro.dto';
import { CentroService } from './centro.service';
export declare class CentroController {
    private readonly centroService;
    constructor(centroService: CentroService);
    create(createCentroDto: CreateCentroDto): Promise<{
        data: import("./entities/centro.entity").Centro;
        message: string;
    }>;
    findAll(): Promise<{
        data: import("./entities/centro.entity").Centro[];
        message: string;
    }>;
    findOne(id: number): Promise<{
        data: import("./entities/centro.entity").Centro;
        message: string;
    }>;
    update(id: number, payload: UpdateCentroDto): Promise<{
        data: import("./entities/centro.entity").Centro;
        message: string;
    }>;
    remove(id: number): Promise<{
        data: import("./entities/centro.entity").Centro;
        message: string;
    }>;
}
