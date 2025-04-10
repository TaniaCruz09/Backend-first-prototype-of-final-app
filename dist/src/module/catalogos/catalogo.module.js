"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const etnia_controller_1 = require("./controllers/etnia.controller");
const academiclevel_controller_1 = require("./controllers/academiclevel.controller");
const academiclevel_service_1 = require("./services/academiclevel.service");
const etnia_service_1 = require("./services/etnia.service");
const gender_service_1 = require("./services/gender.service");
const gender_controller_1 = require("./controllers/gender.controller");
const grades_controller_1 = require("./controllers/grades.controller");
const modalidades_controller_1 = require("./controllers/modalidades.controller");
const modalidad_service_1 = require("./services/modalidad.service");
const professions_controller_1 = require("./controllers/professions.controller");
const professions_service_1 = require("./services/professions.service");
const turnos_controller_1 = require("./controllers/turnos.controller");
const turnos_service_1 = require("./services/turnos.service");
const seccion_controller_1 = require("./controllers/seccion.controller");
const seccion_service_1 = require("./services/seccion.service");
const grades_service_1 = require("./services/grades.service");
const asignatura_entity_1 = require("./entities/asignatura.entity");
const academiclevel_entity_1 = require("./entities/academiclevel.entity");
const etnia_entity_1 = require("./entities/etnia.entity");
const gender_entity_1 = require("./entities/gender.entity");
const grades_entity_1 = require("./entities/grades.entity");
const modalidad_entity_1 = require("./entities/modalidad.entity");
const professions_entity_1 = require("./entities/professions.entity");
const turnos_entity_1 = require("./entities/turnos.entity");
const seccion_entity_1 = require("./entities/seccion.entity");
const asignatura_controller_1 = require("./controllers/asignatura.controller");
const asignatura_service_1 = require("./services/asignatura.service");
const departamento_entity_1 = require("./entities/departamento.entity");
const departamento_controller_1 = require("./controllers/departamento.controller");
const departamento_service_1 = require("./services/departamento.service");
const municipio_entity_1 = require("./entities/municipio.entity");
const municipio_controller_1 = require("./controllers/municipio.controller");
const municipio_service_1 = require("./services/municipio.service");
const pais_entity_1 = require("./entities/pais.entity");
const pais_controller_1 = require("./controllers/pais.controller");
const pais_service_1 = require("./services/pais.service");
const semestres_entity_1 = require("./entities/semestres.entity");
const semestres_controller_1 = require("./controllers/semestres.controller");
const semestre_service_1 = require("./services/semestre.service");
let CatalogoModule = class CatalogoModule {
};
exports.CatalogoModule = CatalogoModule;
exports.CatalogoModule = CatalogoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([academiclevel_entity_1.AcademicLevelEntity, etnia_entity_1.Etnia, gender_entity_1.GenderEntity, grades_entity_1.GradesEntity, modalidad_entity_1.Modalidad, professions_entity_1.ProfessionsEntity, turnos_entity_1.Turno, seccion_entity_1.Seccion, asignatura_entity_1.Asignatura, departamento_entity_1.Departamento, municipio_entity_1.Municipio, pais_entity_1.Pais, semestres_entity_1.SemestreEntity]),
        ],
        controllers: [
            academiclevel_controller_1.AcademicLevelController, etnia_controller_1.EtniaController, gender_controller_1.GenderController, grades_controller_1.GradesController, modalidades_controller_1.ModalidadController, professions_controller_1.ProfessionsController, turnos_controller_1.TurnoController, seccion_controller_1.SeccionController, asignatura_controller_1.AsignaturaController, departamento_controller_1.DepartamentoController, municipio_controller_1.MunicipioController, pais_controller_1.PaisController, semestres_controller_1.SemestreController
        ],
        providers: [
            academiclevel_service_1.AcademicLevelService, etnia_service_1.EtniaService, gender_service_1.GenderService, grades_service_1.GradesService, modalidad_service_1.ModalidadService, professions_service_1.ProfessionsService, turnos_service_1.TurnoService, seccion_service_1.SeccionService, asignatura_service_1.AsignaturaService, departamento_service_1.DepartamentoService, municipio_service_1.MunicipioService, pais_service_1.PaisService, semestre_service_1.SemestreService
        ],
        exports: [CatalogoModule, typeorm_1.TypeOrmModule],
    })
], CatalogoModule);
//# sourceMappingURL=catalogo.module.js.map