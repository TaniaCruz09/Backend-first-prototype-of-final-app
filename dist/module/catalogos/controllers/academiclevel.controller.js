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
exports.AcademicLevelController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const academiclevel_service_1 = require("../services/academiclevel.service");
const academiclevel_dto_1 = require("../dtos/academiclevel.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
let AcademicLevelController = class AcademicLevelController {
    constructor(academicLevelService) {
        this.academicLevelService = academicLevelService;
    }
    async createAcademicLevel(payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'usuario no autenticado',
                    statusCode: 401,
                };
            }
            payload.user_create_id = userId;
            const newAcademicLevel = await this.academicLevelService.created(payload);
            const data = {
                data: newAcademicLevel,
                message: 'creado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getAcademicLevel() {
        try {
            const academicLevel = await this.academicLevelService.getAcademicLevel();
            const data = {
                data: academicLevel,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getAcademicLevelById(id) {
        try {
            const academicLevel = await this.academicLevelService.getAcademicLevelById(id);
            const data = {
                data: academicLevel,
                message: 'Nivel Academico encontrado',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateAcademicLevel(id, payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            payload.user_update_id = userId;
            const academicLevel = await this.academicLevelService.updateAcademicLevel(id, payload);
            const data = {
                data: academicLevel,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteAcademicLevel(id, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            const academicLevel = await this.academicLevelService.deleteAcademicLevel(id, userId);
            return {
                data: academicLevel,
                message: 'academic level marked as deleted',
            };
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.AcademicLevelController = AcademicLevelController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [academiclevel_dto_1.AcademicLevelDto, Object]),
    __metadata("design:returntype", Promise)
], AcademicLevelController.prototype, "createAcademicLevel", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademicLevelController.prototype, "getAcademicLevel", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AcademicLevelController.prototype, "getAcademicLevelById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, academiclevel_dto_1.AcademicLevelDto, Object]),
    __metadata("design:returntype", Promise)
], AcademicLevelController.prototype, "updateAcademicLevel", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AcademicLevelController.prototype, "deleteAcademicLevel", null);
exports.AcademicLevelController = AcademicLevelController = __decorate([
    (0, swagger_1.ApiTags)('academiclevel'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('academiclevel'),
    __metadata("design:paramtypes", [academiclevel_service_1.AcademicLevelService])
], AcademicLevelController);
//# sourceMappingURL=academiclevel.controller.js.map