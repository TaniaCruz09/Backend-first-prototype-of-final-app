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
exports.DocenteController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const docentes_service_1 = require("./docentes.service");
const docentes_dto_1 = require("./docentes.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../common/helpers/utilities");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let DocenteController = class DocenteController {
    constructor(registroService) {
        this.registroService = registroService;
    }
    async createDocente(createDocenteDto, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            createDocenteDto.user_create_id = userId;
            const docente = await this.registroService.createDocente(createDocenteDto);
            const data = {
                data: docente,
                message: 'Docente agregado correctamente ',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getDocente() {
        try {
            const docente = await this.registroService.getDocente();
            const data = {
                data: docente,
                message: 'Ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getDocenteById(id) {
        try {
            const docente = await this.registroService.getDocenteById(id);
            const data = {
                data: docente,
                message: 'Ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async editarDocente(id, payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            payload.user_update_id = userId;
            const docente = await this.registroService.editDocente(id, payload);
            const data = {
                data: docente,
                message: 'Docente actualizado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteDocente(id, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: 'Usuario no autenticado',
                    statusCode: 401,
                };
            }
            const docente = await this.registroService.deleteDocente(id, userId);
            const data = {
                data: docente,
                message: 'Docente eliminado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.DocenteController = DocenteController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [docentes_dto_1.DocentesDTO, Object]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "createDocente", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getDocente", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "getDocenteById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, docentes_dto_1.DocentesDTO, Object]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "editarDocente", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DocenteController.prototype, "deleteDocente", null);
exports.DocenteController = DocenteController = __decorate([
    (0, swagger_1.ApiTags)('Docentes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('docentes'),
    __metadata("design:paramtypes", [docentes_service_1.DocentesService])
], DocenteController);
//# sourceMappingURL=docentes.controller.js.map