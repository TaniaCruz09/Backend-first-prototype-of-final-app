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
exports.AsignaturaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const asignatura_entity_1 = require("../entities/asignatura.entity");
const typeorm_2 = require("typeorm");
const utilities_1 = require("../../../common/helpers/utilities");
let AsignaturaService = class AsignaturaService {
    constructor(asignaturaRepository) {
        this.asignaturaRepository = asignaturaRepository;
    }
    async create(asignatura) {
        try {
            return await this.asignaturaRepository.save(asignatura);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const asignatura = await this.asignaturaRepository.findOne({ where: { id } });
            return asignatura;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            return await this.asignaturaRepository.find();
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, updateAsignaturaDTO) {
        try {
            const asignatura = await this.asignaturaRepository.preload({
                id,
                ...updateAsignaturaDTO,
            });
            return await this.asignaturaRepository.save(asignatura);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id) {
        try {
            const result = await this.asignaturaRepository.delete(id);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.AsignaturaService = AsignaturaService;
exports.AsignaturaService = AsignaturaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asignatura_entity_1.Asignatura)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AsignaturaService);
//# sourceMappingURL=asignatura.service.js.map