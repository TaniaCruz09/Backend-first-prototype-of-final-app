"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./module/database/database.module");
const catalogo_module_1 = require("./module/catalogos/catalogo.module");
const docentes_module_1 = require("./module/docentes/docentes.module");
const auth_module_1 = require("./module/auth/auth.module");
const students_module_1 = require("./module/createEstudents/students.module");
const calificaciones_module_1 = require("./module/calificaciones/calificaciones.module");
const grupos_module_1 = require("./module/grupos/grupos.module");
const centro_module_1 = require("./module/centroEducativo/centro.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }), database_module_1.DatabaseModule, catalogo_module_1.CatalogoModule, docentes_module_1.DocentesModule, auth_module_1.AuthModule, students_module_1.StudetnModule, calificaciones_module_1.CalificacionesModule, grupos_module_1.GruposModule, centro_module_1.CentroModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map