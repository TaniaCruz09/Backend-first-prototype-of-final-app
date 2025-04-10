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
exports.GruposController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const grupos_service_1 = require("../services/grupos.service");
const Update_grupo_dto_1 = require("../dtos/Update-grupo.dto");
const grupos_dto_1 = require("../dtos/grupos.dto");
const utilities_1 = require("../../../common/helpers/utilities");
let GruposController = class GruposController {
    constructor(grupoService) {
        this.grupoService = grupoService;
    }
    async createGrupo(createGrupoDto) {
        try {
            const grupos = await this.grupoService.createGrupo(createGrupoDto);
            const data = {
                data: grupos,
                message: 'Grupo agregado correctamente ',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getgrupos() {
        try {
            const grupos = await this.grupoService.getGrupo();
            const data = {
                data: grupos,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getGruposById(id) {
        try {
            const grupo = await this.grupoService.getGrupoById(id);
            const data = {
                data: grupo,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteGrupo(id) {
        try {
            const grupo = await this.grupoService.deleteGrupos(id);
            const data = {
                data: grupo,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateGrupo(id, payload) {
        const grupo = await this.grupoService.updateGrupos(id, payload);
        const data = {
            data: grupo,
            message: 'Grupo actualizado correctamente',
        };
        return data;
    }
};
exports.GruposController = GruposController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [grupos_dto_1.CreateGrupoDto]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "createGrupo", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "getgrupos", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "getGruposById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "deleteGrupo", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Update_grupo_dto_1.UpdateGrupoDto]),
    __metadata("design:returntype", Promise)
], GruposController.prototype, "updateGrupo", null);
exports.GruposController = GruposController = __decorate([
    (0, swagger_1.ApiTags)('Grupos'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('grupos'),
    __metadata("design:paramtypes", [grupos_service_1.GruposService])
], GruposController);
//# sourceMappingURL=grupos.controller.js.map