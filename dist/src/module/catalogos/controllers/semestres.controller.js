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
exports.SemestreController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
const semestres_dto_1 = require("../dtos/semestres.dto");
const semestre_service_1 = require("../services/semestre.service");
const utilities_1 = require("../../../common/helpers/utilities");
let SemestreController = class SemestreController {
    constructor(SemestreService) {
        this.SemestreService = SemestreService;
    }
    async createdSemestre(payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'usuario no autenticado',
                    statusCode: 401
                };
            }
            payload.user_create_id = userId;
            const newSemestre = await this.SemestreService.created(payload);
            const data = {
                data: newSemestre,
                message: 'created'
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getSemestres() {
        try {
            const semestre = await this.SemestreService.getSemestres();
            const data = {
                data: semestre,
                message: 'Ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getSemestreById(id) {
        try {
            const semestre = await this.SemestreService.getSemestreById(id);
            const data = {
                data: semestre,
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
                    message: "Usuario no autenticado",
                    statusCode: 401
                };
            }
            payload.user_update_id = userId;
            const semestre = await this.SemestreService.updateSemestre(id, payload);
            return {
                data: semestre,
                message: 'Semestre actualizado correctamente',
            };
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteSemestre(id, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: "Usuario no autenticado",
                    statusCode: 401
                };
            }
            const sementre = await this.SemestreService.deleteSemestre(id, userId);
            return {
                data: sementre,
                message: 'sementre marked as deleted',
            };
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.SemestreController = SemestreController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [semestres_dto_1.SemestreDto, Object]),
    __metadata("design:returntype", Promise)
], SemestreController.prototype, "createdSemestre", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SemestreController.prototype, "getSemestres", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SemestreController.prototype, "getSemestreById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, semestres_dto_1.SemestreDto, Object]),
    __metadata("design:returntype", Promise)
], SemestreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SemestreController.prototype, "deleteSemestre", null);
exports.SemestreController = SemestreController = __decorate([
    (0, swagger_1.ApiTags)('semestre'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('semestre'),
    __metadata("design:paramtypes", [semestre_service_1.SemestreService])
], SemestreController);
//# sourceMappingURL=semestres.controller.js.map