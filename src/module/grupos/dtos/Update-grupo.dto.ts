import { IsNotEmpty, IsNumber, IsObject, IsOptional } from "class-validator";
import { GradesEntity, Modalidad, Seccion, Turno } from "../../catalogos";
import { Docentes } from "../../docentes/docentes.entity";

export class UpdateGrupoDto {
     @IsOptional()
       @IsNumber()
       readonly id?: number;
   
       @IsNumber()
       anio_lectivo: number;
   
       @IsNotEmpty()
       @IsObject()
       grado?: GradesEntity;
   
       @IsNotEmpty()
       @IsObject()
       seccion?: Seccion;
   
       @IsNotEmpty()
       @IsObject()
       modalidad?: Modalidad;
       
       @IsNotEmpty()
       @IsObject()
       turno?: Turno;
   
       @IsNotEmpty()
       @IsObject()
       docente?: Docentes;
  }