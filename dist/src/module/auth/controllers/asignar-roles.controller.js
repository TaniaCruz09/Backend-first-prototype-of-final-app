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
exports.AsignarRolesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
const user_has_roles_1 = require("../dtos/user-has-roles");
const swagger_1 = require("@nestjs/swagger");
let AsignarRolesController = class AsignarRolesController {
    constructor(asignarRolesRepo) {
        this.asignarRolesRepo = asignarRolesRepo;
    }
    async asignarRol(userId, payload) {
        const data = await this.asignarRolesRepo.asignarRol(userId, payload);
        return data;
    }
    async removerRol(userId, payload) {
        const data = await this.asignarRolesRepo.removerRol(userId, payload);
        return data;
    }
};
exports.AsignarRolesController = AsignarRolesController;
__decorate([
    (0, common_1.Post)('/:userId'),
    openapi.ApiResponse({ status: 201, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_has_roles_1.UserHasRolesDto]),
    __metadata("design:returntype", Promise)
], AsignarRolesController.prototype, "asignarRol", null);
__decorate([
    (0, common_1.Post)('/remover/:userId'),
    openapi.ApiResponse({ status: 201, type: require("../entities/user.entity").User }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_has_roles_1.UserHasRolesDto]),
    __metadata("design:returntype", Promise)
], AsignarRolesController.prototype, "removerRol", null);
exports.AsignarRolesController = AsignarRolesController = __decorate([
    (0, swagger_1.ApiTags)('Asignar Roles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('asignar-roles'),
    __metadata("design:paramtypes", [services_1.AsignarRolesService])
], AsignarRolesController);
//# sourceMappingURL=asignar-roles.controller.js.map