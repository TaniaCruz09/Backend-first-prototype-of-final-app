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
exports.AcademicLevelService = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const academiclevel_entity_1 = require("../entities/academiclevel.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let AcademicLevelService = class AcademicLevelService {
    constructor(AcademicLevelRepo) {
        this.AcademicLevelRepo = AcademicLevelRepo;
    }
    async created(payload) {
        try {
            const academicLevel = this.AcademicLevelRepo.create(payload);
            return await this.AcademicLevelRepo.save(academicLevel);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getAcademicLevel() {
        try {
            const academicLevels = await this.AcademicLevelRepo.find();
            console.log(academicLevels);
            return academicLevels;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getAcademicLevelById(id) {
        try {
            const academicLevel = await this.AcademicLevelRepo.findOne({ where: { id } });
            return academicLevel;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateAcademicLevel(id, payload) {
        try {
            const academicLevel = await this.AcademicLevelRepo.findOne({ where: { id } });
            if (!academicLevel) {
                throw new common_1.NotFoundException("Profesión no encontrada");
            }
            Object.assign(academicLevel, payload);
            academicLevel.update_at = new Date();
            academicLevel.user_update_id;
            return await this.AcademicLevelRepo.save(academicLevel);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteAcademicLevel(id, userId) {
        try {
            const academicLevel = await this.AcademicLevelRepo.findOne({ where: { id } });
            if (!academicLevel) {
                throw new common_1.NotFoundException("Profesión no encontrada");
            }
            academicLevel.deleted_at = new Date();
            academicLevel.deleted_at_id = userId;
            return await this.AcademicLevelRepo.save(academicLevel);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.AcademicLevelService = AcademicLevelService;
exports.AcademicLevelService = AcademicLevelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(academiclevel_entity_1.AcademicLevelEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AcademicLevelService);
//# sourceMappingURL=academiclevel.service.js.map