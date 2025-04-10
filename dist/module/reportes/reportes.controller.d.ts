import { ReportesService } from './reportes.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
export declare class ReportesController {
    private readonly reportesService;
    constructor(reportesService: ReportesService);
    create(createReporteDto: CreateReporteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReporteDto: UpdateReporteDto): string;
    remove(id: string): string;
}
