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
exports.PaisController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const pais_service_1 = require("../services/pais.service");
const pais_dto_1 = require("../dtos/pais.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
let PaisController = class PaisController {
    constructor(paisService) {
        this.paisService = paisService;
    }
    async createPais(payload) {
        try {
            const pais = await this.paisService.createPais(payload);
            const data = {
                data: pais,
                message: 'Pais agregado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            const pais = await this.paisService.findAll();
            const data = {
                data: pais,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        const pais = await this.paisService.findOne(id);
        const data = {
            data: pais,
            message: 'ok',
        };
        return data;
    }
    async update(id, payload) {
        try {
            const pais = await this.paisService.update(id, payload);
            const data = {
                data: pais,
                message: 'Pais actualizado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id) {
        try {
            const pais = await this.paisService.delete(id);
            const data = {
                data: pais,
                message: 'Pais eliminado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.PaisController = PaisController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pais_dto_1.createPaisDto]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "createPais", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pais_dto_1.createPaisDto]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "delete", null);
exports.PaisController = PaisController = __decorate([
    (0, swagger_1.ApiTags)('Pais'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('pais'),
    __metadata("design:paramtypes", [pais_service_1.PaisService])
], PaisController);
//# sourceMappingURL=pais.controller.js.map