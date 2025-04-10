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
exports.CentroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const utilities_1 = require("../../common/helpers/utilities");
const centro_entity_1 = require("./entities/centro.entity");
let CentroService = class CentroService {
    constructor(centroReposiroty) {
        this.centroReposiroty = centroReposiroty;
    }
    async createCentro(createCentroDto) {
        try {
            const nuevoCentro = this.centroReposiroty.create(createCentroDto);
            return await this.centroReposiroty.save(nuevoCentro);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getCentro() {
        try {
            const centro = await this.centroReposiroty.find({
                relations: ['departamento', 'municipio']
            });
            return centro;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getCentroById(id) {
        try {
            const centro = await this.centroReposiroty.findOne({
                where: { id },
                relations: ['departamento', 'municipio']
            });
            return centro;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteCentro(id) {
        try {
            const Centro = await this.centroReposiroty.findOne({
                where: { id: id }
            });
            return await this.centroReposiroty.remove(Centro);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateCentro(id, payload) {
        try {
            const Centro = await this.centroReposiroty.preload({ id, ...payload });
            if (!Centro)
                throw new common_1.NotFoundException(`Centro con ID ${id} no encontrado`);
            return await this.centroReposiroty.save(Centro);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.CentroService = CentroService;
exports.CentroService = CentroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(centro_entity_1.Centro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CentroService);
//# sourceMappingURL=centro.service.js.map