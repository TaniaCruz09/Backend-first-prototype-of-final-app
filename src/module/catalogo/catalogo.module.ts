import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Etnia } from "./entities/etnia.entity";
import { EtniaController } from "./controllers/etnia.controller";
import { AcademicLevelController } from "./controllers/academiclevel.controller";
import { AcademicLevelService } from "./services/academiclevel.service";
import { EtniaService } from "./services/etnia.service";
import { AcademicLevelEntity } from "./entities/academiclevel.entity";
import { GenderEntity } from "./entities/gender.entity";
import { GenderService } from "./services/gender.service";
import { GenderController } from "./controllers/gender.controller";
import { GradesController } from "./controllers/grades.controller";
import { GradesEntity } from "./entities/grades.entity";
import { Modalidad } from "./entities/modalidad.entity";
import { ModalidadController } from "./controllers/modalidades.controller";
import { ModalidadService } from "./services/modalidad.service";
import { ProfessionsEntity } from "./entities/professions.entity";
import { ProfessionsController } from "./controllers/professions.controller";
import { ProfessionsService } from "./services/professions.service";
import { Turno } from "./entities/turnos.entity";
import { TurnoController } from "./controllers/turnos.controller";
import { TurnoService } from "./services/turnos.service";
import { Seccion } from "./entities/seccion.entity";
import { SeccionController } from "./controllers/seccion.controller";
import { SeccionService } from "./services/seccion.service";
import { GradesService } from "./services/grades.service";




@Module({
  imports: [
    TypeOrmModule.forFeature([AcademicLevelEntity, Etnia, GenderEntity, GradesEntity, Modalidad, ProfessionsEntity, Turno, Seccion]),
  ],
  controllers: [
    AcademicLevelController, EtniaController, GenderController, GradesController, ModalidadController, ProfessionsController, TurnoController, SeccionController
  ],
  providers: [
    AcademicLevelService, EtniaService, GenderService, GradesService, ModalidadService, ProfessionsService, TurnoService, SeccionService
    
  ],
  exports: [CatalogoModule, TypeOrmModule, ],
})
export class CatalogoModule {}
