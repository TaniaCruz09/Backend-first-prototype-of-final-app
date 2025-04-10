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
exports.CentroController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_centro_dto_1 = require("./dto/create-centro.dto");
const update_centro_dto_1 = require("./dto/update-centro.dto");
const centro_service_1 = require("./centro.service");
const utilities_1 = require("../../common/helpers/utilities");
let CentroController = class CentroController {
    constructor(centroService) {
        this.centroService = centroService;
    }
    async create(createCentroDto) {
        try {
            const centro = await this.centroService.createCentro(createCentroDto);
            const data = {
                data: centro,
                message: 'Centro creado correctamente'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            const centro = await this.centroService.getCentro();
            const data = {
                data: centro,
                message: 'ok'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const centro = await this.centroService.getCentroById(id);
            const data = {
                data: centro,
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
            const centro = await this.centroService.updateCentro(id, payload);
            const data = {
                data: centro,
                message: 'Centro actualizado correctamente'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async remove(id) {
        try {
            const centro = await this.centroService.deleteCentro(id);
            const data = {
                data: centro,
                message: 'Centro eliminado correctamente'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.CentroController = CentroController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_centro_dto_1.CreateCentroDto]),
    __metadata("design:returntype", Promise)
], CentroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CentroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CentroController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_centro_dto_1.UpdateCentroDto]),
    __metadata("design:returntype", Promise)
], CentroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CentroController.prototype, "remove", null);
exports.CentroController = CentroController = __decorate([
    (0, common_1.Controller)('centro'),
    __metadata("design:paramtypes", [centro_service_1.CentroService])
], CentroController);
//# sourceMappingURL=centro.controller.js.map