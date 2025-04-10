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
exports.SeccionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const seccion_dto_1 = require("../dtos/seccion.dto");
const seccion_service_1 = require("../services/seccion.service");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
const jwt_guard_1 = require("../../../module/auth/guards/jwt.guard");
let SeccionController = class SeccionController {
    constructor(seccionService) {
        this.seccionService = seccionService;
    }
    async findAll() {
        try {
            const seccion = await this.seccionService.findAll();
            const data = {
                data: seccion,
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
            const seccion = await this.seccionService.findOne(id);
            const data = {
                data: seccion,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
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
            const seccion = await this.seccionService.create(payload);
            const data = {
                data: seccion,
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
            const seccion = await this.seccionService.update(id, payload);
            const data = {
                data: seccion,
                message: 'Seccion actualizada correcto',
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
            const seccion = await this.seccionService.delete(id, userId);
            const data = {
                data: seccion,
                message: 'Seccion eliminada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.SeccionController = SeccionController;
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [seccion_dto_1.CreateSeccionDTO, Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, seccion_dto_1.CreateSeccionDTO, Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SeccionController.prototype, "delete", null);
exports.SeccionController = SeccionController = __decorate([
    (0, swagger_1.ApiTags)('Seccion'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('seccion'),
    __metadata("design:paramtypes", [seccion_service_1.SeccionService])
], SeccionController);
//# sourceMappingURL=seccion.controller.js.map