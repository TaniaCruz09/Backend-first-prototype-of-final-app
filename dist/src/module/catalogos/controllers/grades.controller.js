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
exports.GradesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const grades_service_1 = require("../services/grades.service");
const grades_dto_1 = require("../dtos/grades.dto");
const swagger_1 = require("@nestjs/swagger");
const utilities_1 = require("../../../common/helpers/utilities");
let GradesController = class GradesController {
    constructor(gradesService) {
        this.gradesService = gradesService;
    }
    async createGrades(payload) {
        try {
            const newGrades = await this.gradesService.created(payload);
            const data = {
                data: newGrades,
                message: 'created',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getGrades() {
        try {
            const grades = await this.gradesService.getGrades();
            const data = {
                data: grades,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getGradesById(id) {
        try {
            const grades = await this.gradesService.getGradesById(id);
            const data = {
                data: grades,
                message: 'all ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateGrades(id, payload) {
        try {
            const grades = await this.gradesService.updateGrades(id, payload);
            const data = {
                data: grades,
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteGrades(id) {
        try {
            const grades = await this.gradesService.deleteGrades(id);
            const data = {
                data: grades,
                message: 'grade deleted',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.GradesController = GradesController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [grades_dto_1.GradesDto]),
    __metadata("design:returntype", Promise)
], GradesController.prototype, "createGrades", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GradesController.prototype, "getGrades", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GradesController.prototype, "getGradesById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, grades_dto_1.GradesDto]),
    __metadata("design:returntype", Promise)
], GradesController.prototype, "updateGrades", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GradesController.prototype, "deleteGrades", null);
exports.GradesController = GradesController = __decorate([
    (0, swagger_1.ApiTags)('Grades'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('grades'),
    __metadata("design:paramtypes", [grades_service_1.GradesService])
], GradesController);
//# sourceMappingURL=grades.controller.js.map