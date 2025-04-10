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
exports.SemestreService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const semestres_entity_1 = require("../entities/semestres.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let SemestreService = class SemestreService {
    constructor(SemestreRepo) {
        this.SemestreRepo = SemestreRepo;
    }
    async created(payload) {
        try {
            const semestre = await this.SemestreRepo.create(payload);
            return await this.SemestreRepo.save(semestre);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getSemestres() {
        try {
            const semestre = await this.SemestreRepo.find();
            return semestre;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getSemestreById(id) {
        try {
            const semestre = await this.SemestreRepo.findOne({ where: { id } });
            return semestre;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateSemestre(id, payload) {
        try {
            const semestre = await this.SemestreRepo.findOne({ where: { id } });
            if (!semestre) {
                throw new common_1.NotFoundException("semestre no encontrado");
            }
            Object.assign(semestre, payload);
            semestre.update_at = new Date();
            semestre.user_update_id;
            return await this.SemestreRepo.save(semestre);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteSemestre(id, userId) {
        try {
            const semestre = await this.SemestreRepo.findOne({ where: { id } });
            if (!semestre) {
                throw new common_1.NotFoundException("semestre no encontrado");
            }
            semestre.deleted_at = new Date();
            semestre.deleted_at_id = userId;
            return await this.SemestreRepo.save(semestre);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.SemestreService = SemestreService;
exports.SemestreService = SemestreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(semestres_entity_1.SemestreEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SemestreService);
//# sourceMappingURL=semestre.service.js.map