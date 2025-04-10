"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalificacionesModule = void 0;
const common_1 = require("@nestjs/common");
const calificaciones_service_1 = require("./calificaciones.service");
const calificaciones_controller_1 = require("./calificaciones.controller");
const calificacion_entity_1 = require("./entities/calificacion.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CalificacionesModule = class CalificacionesModule {
};
exports.CalificacionesModule = CalificacionesModule;
exports.CalificacionesModule = CalificacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([calificacion_entity_1.Calificaciones])],
        controllers: [calificaciones_controller_1.CalificacionesController],
        providers: [calificaciones_service_1.CalificacionesService],
    })
], CalificacionesModule);
//# sourceMappingURL=calificaciones.module.js.map