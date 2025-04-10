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
exports.GenderService = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const gender_entity_1 = require("../entities/gender.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let GenderService = class GenderService {
    constructor(GenderRepo) {
        this.GenderRepo = GenderRepo;
    }
    async created(payload) {
        try {
            const gender = await this.GenderRepo.create(payload);
            return await this.GenderRepo.save(gender);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getGender() {
        try {
            const gender = await this.GenderRepo.find();
            console.log(gender);
            return gender;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getGenderById(id) {
        try {
            const gender = await this.GenderRepo.findOne({
                where: { id },
            });
            return gender;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateGender(id, payload) {
        try {
            const gender = await this.GenderRepo.findOne({ where: { id } });
            if (!gender) {
                throw new common_1.NotFoundException("genero no encontrada");
            }
            Object.assign(gender, payload);
            gender.update_at = new Date();
            gender.user_update_id;
            return await this.GenderRepo.save(gender);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteGender(id, userId) {
        try {
            const gender = await this.GenderRepo.findOne({
                where: { id: id }
            });
            if (!gender) {
                throw new common_1.NotFoundException("Profesión no encontrada");
            }
            gender.deleted_at = new Date();
            gender.deleted_at_id = userId;
            return await this.GenderRepo.save(gender);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.GenderService = GenderService;
exports.GenderService = GenderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(gender_entity_1.GenderEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], GenderService);
//# sourceMappingURL=gender.service.js.map