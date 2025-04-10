import { CalificacionesService } from './calificaciones.service';
import { CreateCalificacionDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
export declare class CalificacionesController {
    private readonly calificacionesService;
    constructor(calificacionesService: CalificacionesService);
    createCalificaciones(payload: CreateCalificacionDto): Promise<{
        data: import("./entities/calificacion.entity").Calificaciones;
        message: string;
    }>;
    findAllCalificaciones(): Promise<{
        data: import("./entities/calificacion.entity").Calificaciones[];
        message: string;
    }>;
    findOneByIdCalificaciones(id: number): Promise<{
        data: import("./entities/calificacion.entity").Calificaciones;
        message: string;
    }>;
    update(id: number, payload: UpdateCalificacioneDto): Promise<{
        data: import("./entities/calificacion.entity").Calificaciones;
        message: string;
    }>;
    remove(id: number): Promise<{
        data: void;
        message: string;
    }>;
}
