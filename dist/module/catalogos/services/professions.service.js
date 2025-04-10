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
exports.ProfessionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const professions_entity_1 = require("../entities/professions.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let ProfessionsService = class ProfessionsService {
    constructor(ProfessionsRepo) {
        this.ProfessionsRepo = ProfessionsRepo;
    }
    async created(payload) {
        try {
            const profession = await this.ProfessionsRepo.create(payload);
            return await this.ProfessionsRepo.save(profession);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getProfessions() {
        try {
            const profession = await this.ProfessionsRepo.find();
            return profession;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getProfessionsById(id) {
        try {
            const profession = await this.ProfessionsRepo.findOne({
                where: { id },
            });
            return profession;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateProfession(id, payload) {
        try {
            const profession = await this.ProfessionsRepo.findOne({ where: { id } });
            if (!profession) {
                throw new common_1.NotFoundException('Profesión no encontrada');
            }
            Object.assign(profession, payload);
            profession.update_at = new Date();
            profession.user_update_id;
            return await this.ProfessionsRepo.save(profession);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteProfession(id, userId) {
        try {
            const profession = await this.ProfessionsRepo.findOne({ where: { id } });
            if (!profession) {
                throw new common_1.NotFoundException('Profesión no encontrada');
            }
            profession.deleted_at = new Date();
            profession.deleted_at_id = userId;
            return await this.ProfessionsRepo.save(profession);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.ProfessionsService = ProfessionsService;
exports.ProfessionsService = ProfessionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(professions_entity_1.ProfessionsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfessionsService);
//# sourceMappingURL=professions.service.js.map