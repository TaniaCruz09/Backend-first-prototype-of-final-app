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
exports.OrganizacionEscolarService = void 0;
const common_1 = require("@nestjs/common");
const organizacionEscolar_entity_1 = require("../entities/organizacionEscolar.entity.");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const utilities_1 = require("../../../common/helpers/utilities");
let OrganizacionEscolarService = class OrganizacionEscolarService {
    constructor(organizacionEscolarRepo) {
        this.organizacionEscolarRepo = organizacionEscolarRepo;
    }
    async createOrganizacion(createOrganizacionDto) {
        try {
            const nuevaOrganizacion = await this.organizacionEscolarRepo.create(createOrganizacionDto);
            return await this.organizacionEscolarRepo.save(nuevaOrganizacion);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getOrganizacion() {
        try {
            const organizacion = await this.organizacionEscolarRepo.find({
                relations: ['grupo'],
            });
            return organizacion;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getOrganizacionById(id) {
        try {
            const organizacion = await this.organizacionEscolarRepo.findOne({
                where: { id },
                relations: ['grupo'],
            });
            return organizacion;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async editOrganizacion(id, payload) {
        try {
            const organizacion = await this.organizacionEscolarRepo.findOne({
                where: { id },
                relations: ['grupo'],
            });
            if (!organizacion) {
                throw new common_1.NotFoundException('Organizacion Escolar no encontrada');
            }
            Object.assign(organizacion, payload);
            organizacion.update_at = new Date();
            organizacion.user_update_id;
            return await this.organizacionEscolarRepo.save(organizacion);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteOrganizacion(id, userId) {
        try {
            const organizacion = await this.organizacionEscolarRepo.findOne({
                where: { id },
                relations: ['grupo'],
            });
            if (!organizacion) {
                throw new common_1.NotFoundException('Organizacion escolar no encontrada');
            }
            organizacion.deleted_at = new Date();
            organizacion.deleted_at_id = userId;
            return await this.organizacionEscolarRepo.save(organizacion);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.OrganizacionEscolarService = OrganizacionEscolarService;
exports.OrganizacionEscolarService = OrganizacionEscolarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(organizacionEscolar_entity_1.OrganizacionEscolar)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OrganizacionEscolarService);
//# sourceMappingURL=organizacionEscolar.service.js.map