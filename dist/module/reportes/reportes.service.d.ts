import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
export declare class ReportesService {
    create(createReporteDto: CreateReporteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReporteDto: UpdateReporteDto): string;
    remove(id: number): string;
}
