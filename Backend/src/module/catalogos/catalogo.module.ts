import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtniaController } from './controllers/etnia.controller';
import { AcademicLevelController } from './controllers/academiclevel.controller';
import { AcademicLevelService } from './services/academiclevel.service';
import { EtniaService } from './services/etnia.service';
import { GenderService } from './services/gender.service';
import { GenderController } from './controllers/gender.controller';
import { GradesController } from './controllers/grades.controller';
import { ModalidadController } from './controllers/modalidades.controller';
import { ModalidadService } from './services/modalidad.service';
import { ProfessionsController } from './controllers/professions.controller';
import { ProfessionsService } from './services/professions.service';
import { TurnoController } from './controllers/turnos.controller';
import { TurnoService } from './services/turnos.service';
import { SeccionController } from './controllers/seccion.controller';
import { SeccionService } from './services/seccion.service';
import { GradesService } from './services/grades.service';
import { Asignatura } from './entities/asignatura.entity';
import { AcademicLevelEntity } from './entities/academiclevel.entity';
import { Etnia } from './entities/etnia.entity';
import { GenderEntity } from './entities/gender.entity';
import { GradesEntity } from './entities/grades.entity';
import { Modalidad } from './entities/modalidad.entity';
import { ProfessionsEntity } from './entities/professions.entity';
import { Turno } from './entities/turnos.entity';
import { Seccion } from './entities/seccion.entity';
import { AsignaturaController } from './controllers/asignatura.controller';
import { AsignaturaService } from './services/asignatura.service';
import { Departamento } from './entities/departamento.entity';
import { DepartamentoController } from './controllers/departamento.controller';
import { DepartamentoService } from './services/departamento.service';
import { Municipio } from './entities/municipio.entity';
import { MunicipioController } from './controllers/municipio.controller';
import { MunicipioService } from './services/municipio.service';
import { Pais } from './entities/pais.entity';
import { PaisController } from './controllers/pais.controller';
import { PaisService } from './services/pais.service';
import { Cortes } from './entities/corte.entity';
import { CortesController } from './controllers/cortes.controller';
import { CortesService } from './services/cortes.service';
import { SemestreEntity } from './entities/semestres.entity';
import { SemestreController } from './controllers/semestres.controller';
import { SemestreService } from './services/semestre.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AcademicLevelEntity,
      Etnia,
      GenderEntity,
      GradesEntity,
      Modalidad,
      ProfessionsEntity,
      Turno,
      Seccion,
      Asignatura,
      Departamento,
      Municipio,
      Pais,
      SemestreEntity,
      Cortes,
    ]),
  ],
  controllers: [
    AcademicLevelController,
    EtniaController,
    GenderController,
    GradesController,
    ModalidadController,
    ProfessionsController,
    TurnoController,
    SeccionController,
    AsignaturaController,
    DepartamentoController,
    MunicipioController,
    PaisController,
    SemestreController,
    CortesController,
  ],
  providers: [
    AcademicLevelService,
    EtniaService,
    GenderService,
    GradesService,
    ModalidadService,
    ProfessionsService,
    TurnoService,
    SeccionService,
    AsignaturaService,
    DepartamentoService,
    MunicipioService,
    PaisService,
    SemestreService,
    CortesService,
  ],
  exports: [CatalogoModule, TypeOrmModule],
})
export class CatalogoModule {}
