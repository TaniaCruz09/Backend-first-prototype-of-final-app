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
exports.GradesService = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const grades_entity_1 = require("../entities/grades.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let GradesService = class GradesService {
    constructor(GradesRepo) {
        this.GradesRepo = GradesRepo;
    }
    async created(payload) {
        try {
            const grades = await this.GradesRepo.create(payload);
            return await this.GradesRepo.save(grades);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getGrades() {
        try {
            const grades = await this.GradesRepo.find();
            console.log(grades);
            return grades;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getGradesById(id) {
        try {
            const grades = await this.GradesRepo.findOne({
                where: { id },
            });
            return grades;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateGrades(id, payload) {
        try {
            const grades = await this.GradesRepo.preload({ id, ...payload });
            return await this.GradesRepo.save(grades);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteGrades(id) {
        try {
            const grades = await this.GradesRepo.findOne({
                where: { id: id }
            });
            return await this.GradesRepo.remove(grades);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.GradesService = GradesService;
exports.GradesService = GradesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(grades_entity_1.GradesEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], GradesService);
//# sourceMappingURL=grades.service.js.map