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
exports.ProfessionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const professions_service_1 = require("../services/professions.service");
const professions_dto_1 = require("../dtos/professions.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
let ProfessionsController = class ProfessionsController {
    constructor(professionsService) {
        this.professionsService = professionsService;
    }
    async createdProfessions(payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            payload.user_create_id = userId;
            const newProfessions = await this.professionsService.created(payload);
            const data = {
                data: newProfessions,
                message: 'created',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getProfessions() {
        try {
            const profession = await this.professionsService.getProfessions();
            const data = {
                data: profession,
                message: 'Ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getProfessionsById(id) {
        try {
            const profession = await this.professionsService.getProfessionsById(id);
            const data = {
                data: profession,
                message: 'Ok',
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
            const profesion = await this.professionsService.updateProfession(id, payload);
            return {
                data: profesion,
                message: 'Profesión actualizada correctamente',
            };
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteProfession(id, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            const profession = await this.professionsService.deleteProfession(id, userId);
            return {
                data: profession,
                message: 'Profession marked as deleted',
            };
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.ProfessionsController = ProfessionsController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [professions_dto_1.ProfessionsDto, Object]),
    __metadata("design:returntype", Promise)
], ProfessionsController.prototype, "createdProfessions", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessionsController.prototype, "getProfessions", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfessionsController.prototype, "getProfessionsById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, professions_dto_1.ProfessionsDto, Object]),
    __metadata("design:returntype", Promise)
], ProfessionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfessionsController.prototype, "deleteProfession", null);
exports.ProfessionsController = ProfessionsController = __decorate([
    (0, swagger_1.ApiTags)('Profession'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('profession'),
    __metadata("design:paramtypes", [professions_service_1.ProfessionsService])
], ProfessionsController);
//# sourceMappingURL=professions.controller.js.map