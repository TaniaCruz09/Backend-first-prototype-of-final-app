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
exports.DepartamentoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const departamento_service_1 = require("../services/departamento.service");
const departamento_dto_1 = require("../dtos/departamento.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
let DepartamentoController = class DepartamentoController {
    constructor(departamentoService) {
        this.departamentoService = departamentoService;
    }
    async findAll() {
        try {
            const departamento = await this.departamentoService.findAll();
            const data = {
                data: departamento,
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
            const departamento = await this.departamentoService.findOne(id);
            const data = {
                data: departamento,
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
            const departamento = await this.departamentoService.create(payload);
            const data = {
                data: departamento,
                message: 'Departamento creado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload) {
        try {
            const departamento = await this.departamentoService.update(id, payload);
            const data = {
                data: departamento,
                message: 'Departamento actualizado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id) {
        try {
            const departamento = await this.departamentoService.delete(id);
            const data = {
                data: departamento,
                message: 'Departamento eliminado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.DepartamentoController = DepartamentoController;
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [departamento_dto_1.createDepartamentoDto]),
    __metadata("design:returntype", Promise)
], DepartamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, departamento_dto_1.createDepartamentoDto]),
    __metadata("design:returntype", Promise)
], DepartamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DepartamentoController.prototype, "delete", null);
exports.DepartamentoController = DepartamentoController = __decorate([
    (0, swagger_1.ApiTags)('Departamento'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('departamento'),
    __metadata("design:paramtypes", [departamento_service_1.DepartamentoService])
], DepartamentoController);
//# sourceMappingURL=departamento.controller.js.map