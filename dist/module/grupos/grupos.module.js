"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grupos_entity_1 = require("./entities/grupos.entity");
const gruposConEstudiantes_entity_1 = require("./entities/gruposConEstudiantes.entity");
const grupos_controller_1 = require("./controllers/grupos.controller");
const gruposConEstudiantes_controller_1 = require("./controllers/gruposConEstudiantes.controller");
const gruposConEstudiantes_service_1 = require("./services/gruposConEstudiantes.service");
const grupos_service_1 = require("./services/grupos.service");
const organizacionEscolar_entity_1 = require("./entities/organizacionEscolar.entity.");
const organizacionEscolar_service_1 = require("./services/organizacionEscolar.service");
const organizacionEscolar_controller_1 = require("./controllers/organizacionEscolar.controller");
let GruposModule = class GruposModule {
};
exports.GruposModule = GruposModule;
exports.GruposModule = GruposModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                grupos_entity_1.Grupos,
                gruposConEstudiantes_entity_1.GruposConEstudiantes,
                organizacionEscolar_entity_1.OrganizacionEscolar,
            ]),
        ],
        controllers: [
            grupos_controller_1.GruposController,
            gruposConEstudiantes_controller_1.GruposConEstudiantesController,
            organizacionEscolar_controller_1.OrganizacionEscolarController,
        ],
        providers: [
            grupos_service_1.GruposService,
            gruposConEstudiantes_service_1.GruposConEstudiantesService,
            organizacionEscolar_service_1.OrganizacionEscolarService,
        ],
    })
], GruposModule);
//# sourceMappingURL=grupos.module.js.map