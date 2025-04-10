"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalificacionesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const calificaciones_service_1 = require("./calificaciones.service");
const create_calificacione_dto_1 = require("./dto/create-calificacione.dto");
const update_calificacione_dto_1 = require("./dto/update-calificacione.dto");
const utilities_1 = require("../../common/helpers/utilities");
let CalificacionesController = class CalificacionesController {
    constructor(calificacionesService) {
        this.calificacionesService = calificacionesService;
    }
    async createCalificaciones(payload) {
        try {
            const nuevaCalificacion = await this.calificacionesService.create(payload);
            const data = {
                data: nuevaCalificacion,
                message: 'Calificación creada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAllCalificaciones() {
        try {
            const calificaciones = await this.calificacionesService.findAll();
            const data = {
                data: calificaciones,
                message: 'ok'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOneByIdCalificaciones(id) {
        try {
            const calificaciones = await this.calificacionesService.findOne(id);
            const data = {
                data: calificaciones,
                message: 'ok'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload) {
        try {
            const calificiones = await this.calificacionesService.update(id, payload);
            const data = {
                data: calificiones,
                message: 'Calificación actualizada correctamente'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async remove(id) {
        try {
            const calificaciones = await this.calificacionesService.remove(id);
            const data = {
                data: calificaciones,
                message: "Calificación eliminada correctamente"
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.CalificacionesController = CalificacionesController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_calificacione_dto_1.CreateCalificacionDto]),
    __metadata("design:returntype", Promise)
], CalificacionesController.prototype, "createCalificaciones", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalificacionesController.prototype, "findAllCalificaciones", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CalificacionesController.prototype, "findOneByIdCalificaciones", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_calificacione_dto_1.UpdateCalificacioneDto]),
    __metadata("design:returntype", Promise)
], CalificacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CalificacionesController.prototype, "remove", null);
exports.CalificacionesController = CalificacionesController = __decorate([
    (0, common_1.Controller)('calificaciones'),
    __metadata("design:paramtypes", [calificaciones_service_1.CalificacionesService])
], CalificacionesController);
//# sourceMappingURL=calificaciones.controller.js.map