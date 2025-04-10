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
exports.ModalidadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const modalidad_entity_1 = require("../entities/modalidad.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let ModalidadService = class ModalidadService {
    constructor(modalidadRepository) {
        this.modalidadRepository = modalidadRepository;
    }
    async create(payload) {
        try {
            const modalidad = await this.modalidadRepository.create(payload);
            return await this.modalidadRepository.save(modalidad);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const modalidad = await this.modalidadRepository.findOne({
                where: { id },
            });
            return modalidad;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            const modalidad = await this.modalidadRepository.find();
            return modalidad;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload) {
        try {
            const modalidad = await this.modalidadRepository.findOne({
                where: { id },
            });
            if (!modalidad) {
                throw new common_1.NotFoundException('Modalidad no encotrando');
            }
            Object.assign(modalidad, payload);
            modalidad.update_at = new Date();
            modalidad.user_update_id;
            return await this.modalidadRepository.save(modalidad);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id, userId) {
        try {
            const modalidad = await this.modalidadRepository.findOne({
                where: { id },
            });
            if (!modalidad) {
                throw new common_1.NotFoundException('Profesión no encontrada');
            }
            modalidad.deleted_at = new Date();
            modalidad.deleted_at_id = userId;
            return await this.modalidadRepository.save(modalidad);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.ModalidadService = ModalidadService;
exports.ModalidadService = ModalidadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(modalidad_entity_1.Modalidad)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModalidadService);
//# sourceMappingURL=modalidad.service.js.map