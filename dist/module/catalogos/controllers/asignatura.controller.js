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
exports.AsignaturaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const asignatura_service_1 = require("../services/asignatura.service");
const asignatura_dto_1 = require("../dtos/asignatura.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
let AsignaturaController = class AsignaturaController {
    constructor(asignaturaService) {
        this.asignaturaService = asignaturaService;
    }
    async findAll() {
        try {
            const asignatura = await this.asignaturaService.findAll();
            const data = {
                data: asignatura,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const asignatura = await this.asignaturaService.findOne(id);
            const data = {
                data: asignatura,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async create(payload) {
        try {
            const asignatura = await this.asignaturaService.create(payload);
            const data = {
                data: asignatura,
                message: 'Asignatura creada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload) {
        try {
            const asignatura = await this.asignaturaService.update(id, payload);
            const data = {
                data: asignatura,
                message: 'Asignatura Actualizada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id) {
        try {
            const asignatura = await this.asignaturaService.delete(id);
            const data = {
                data: asignatura,
                message: 'Asignatura eliminada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.AsignaturaController = AsignaturaController;
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AsignaturaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsignaturaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [asignatura_dto_1.createAsignaturaDto]),
    __metadata("design:returntype", Promise)
], AsignaturaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, asignatura_dto_1.createAsignaturaDto]),
    __metadata("design:returntype", Promise)
], AsignaturaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsignaturaController.prototype, "delete", null);
exports.AsignaturaController = AsignaturaController = __decorate([
    (0, swagger_1.ApiTags)('asignatura'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('asignatura'),
    __metadata("design:paramtypes", [asignatura_service_1.AsignaturaService])
], AsignaturaController);
//# sourceMappingURL=asignatura.controller.js.map