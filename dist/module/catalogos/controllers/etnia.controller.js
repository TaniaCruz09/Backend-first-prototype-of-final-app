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
exports.EtniaController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const etnia_service_1 = require("../services/etnia.service");
const etnia_dto_1 = require("../dtos/etnia.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
let EtniaController = class EtniaController {
    constructor(etniaService) {
        this.etniaService = etniaService;
    }
    async create(payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            payload.user_create_id = userId;
            const etnia = await this.etniaService.create(payload);
            const data = {
                data: etnia,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            const etnia = await this.etniaService.findAll();
            const data = {
                data: etnia,
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
            const etnia = await this.etniaService.findOne(id);
            const data = {
                data: etnia,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            payload.user_update_id = userId;
            const etnia = await this.etniaService.update(id, payload);
            const data = {
                data: etnia,
                message: 'Etnia actualizada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            const etnia = await this.etniaService.delete(id, userId);
            const data = {
                data: etnia,
                message: 'Etnia eliminada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.EtniaController = EtniaController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [etnia_dto_1.createEtniaDto, Object]),
    __metadata("design:returntype", Promise)
], EtniaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EtniaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EtniaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, etnia_dto_1.createEtniaDto, Object]),
    __metadata("design:returntype", Promise)
], EtniaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EtniaController.prototype, "delete", null);
exports.EtniaController = EtniaController = __decorate([
    (0, swagger_1.ApiTags)('Etnia'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('etnia'),
    __metadata("design:paramtypes", [etnia_service_1.EtniaService])
], EtniaController);
//# sourceMappingURL=etnia.controller.js.map