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
exports.SeccionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seccion_entity_1 = require("../entities/seccion.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let SeccionService = class SeccionService {
    constructor(seccionRepository) {
        this.seccionRepository = seccionRepository;
    }
    async create(payload) {
        try {
            const seccion = await this.seccionRepository.create(payload);
            return await this.seccionRepository.save(seccion);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            const seccion = await this.seccionRepository.find();
            return seccion;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const seccion = await this.seccionRepository.findOne({ where: { id } });
            return seccion;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload) {
        try {
            const seccion = await this.seccionRepository.findOne({ where: { id } });
            if (!seccion) {
                throw new common_1.NotFoundException('Seccion no encontrada');
            }
            Object.assign(seccion, payload);
            seccion.update_at = new Date();
            seccion.user_update_id;
            return await this.seccionRepository.save(seccion);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id, userId) {
        try {
            const seccion = await this.seccionRepository.findOne({ where: { id } });
            if (!seccion) {
                throw new common_1.NotFoundException('Profesión no encontrada');
            }
            seccion.deleted_at = new Date();
            seccion.deleted_at_id = userId;
            return await this.seccionRepository.save(seccion);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.SeccionService = SeccionService;
exports.SeccionService = SeccionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seccion_entity_1.Seccion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeccionService);
//# sourceMappingURL=seccion.service.js.map