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
exports.OrganizacionEscolarController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../../../module/auth/guards/jwt.guard");
const organizacionEscolar_service_1 = require("../services/organizacionEscolar.service");
const organizacionEscolar_dto_1 = require("../dtos/organizacionEscolar.dto");
const utilities_1 = require("../../../common/helpers/utilities");
let OrganizacionEscolarController = class OrganizacionEscolarController {
    constructor(organizacionService) {
        this.organizacionService = organizacionService;
    }
    async createOrganizacion(createOrganizacionDTO, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            createOrganizacionDTO.user_create_id = userId;
            const organizacion = await this.organizacionService.createOrganizacion(createOrganizacionDTO);
            const data = {
                data: organizacion,
                message: 'Organizacion Agregada Correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getOrganizacion() {
        try {
            const organizacion = await this.organizacionService.getOrganizacion();
            const data = {
                data: organizacion,
                message: 'Ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getOrganizacionById(id) {
        try {
            const organizacion = await this.organizacionService.getOrganizacionById(id);
            const data = {
                data: organizacion,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async editarOrganizacion(id, payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            payload.user_update_id = userId;
            const organizacion = await this.organizacionService.editOrganizacion(id, payload);
            const data = {
                data: organizacion,
                message: 'Organizacion actualizada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteOrganizacion(id, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            const organizacion = await this.organizacionService.deleteOrganizacion(id, userId);
            const data = {
                data: organizacion,
                message: 'Organizacion escolar eliminada correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.OrganizacionEscolarController = OrganizacionEscolarController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [organizacionEscolar_dto_1.CreateOrganizacionEscolarDTO, Object]),
    __metadata("design:returntype", Promise)
], OrganizacionEscolarController.prototype, "createOrganizacion", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganizacionEscolarController.prototype, "getOrganizacion", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganizacionEscolarController.prototype, "getOrganizacionById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, organizacionEscolar_dto_1.CreateOrganizacionEscolarDTO, Object]),
    __metadata("design:returntype", Promise)
], OrganizacionEscolarController.prototype, "editarOrganizacion", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OrganizacionEscolarController.prototype, "deleteOrganizacion", null);
exports.OrganizacionEscolarController = OrganizacionEscolarController = __decorate([
    (0, swagger_1.ApiTags)('OrganizacionEscolar'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('organizacionEscolar'),
    __metadata("design:paramtypes", [organizacionEscolar_service_1.OrganizacionEscolarService])
], OrganizacionEscolarController);
//# sourceMappingURL=organizacionEscolar.controller.js.map