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
exports.DocentesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const docentes_entity_1 = require("./docentes.entity");
const typeorm_2 = require("typeorm");
const utilities_1 = require("../../common/helpers/utilities");
let DocentesService = class DocentesService {
    constructor(docenteRepository) {
        this.docenteRepository = docenteRepository;
    }
    async createDocente(createDocenteDto) {
        try {
            const nuevoDocente = await this.docenteRepository.create(createDocenteDto);
            return this.docenteRepository.save(nuevoDocente);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getDocente() {
        try {
            const docente = await this.docenteRepository.find({
                relations: [
                    'sexo',
                    'nivel_academico',
                    'profesion',
                    'pais',
                    'departamento',
                    'municipio',
                ],
            });
            return docente;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getDocenteById(id) {
        try {
            const docente = await this.docenteRepository.findOne({
                where: { id },
                relations: [
                    'sexo',
                    'nivel_academico',
                    'profesion',
                    'pais',
                    'departamento',
                    'municipio',
                ],
            });
            return docente;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async editDocente(id, payload) {
        try {
            const docente = await this.docenteRepository.findOne({
                where: { id },
                relations: [
                    'sexo',
                    'nivel_academico',
                    'profesion',
                    'pais',
                    'departamento',
                    'municipio',
                ],
            });
            if (!docente) {
                throw new common_1.NotFoundException('Docente no encontrada');
            }
            Object.assign(docente, payload);
            docente.update_at = new Date();
            docente.user_update_id;
            return await this.docenteRepository.save(docente);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteDocente(id, userId) {
        try {
            const docente = await this.docenteRepository.findOne({
                where: { id },
                relations: [
                    'sexo',
                    'nivel_academico',
                    'profesion',
                    'pais',
                    'departamento',
                    'municipio',
                ],
            });
            if (!docente) {
                throw new common_1.NotFoundException('Profesión no encontrada');
            }
            docente.deleted_at = new Date();
            docente.deleted_at_id = userId;
            return await this.docenteRepository.save(docente);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.DocentesService = DocentesService;
exports.DocentesService = DocentesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(docentes_entity_1.Docentes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocentesService);
//# sourceMappingURL=docentes.service.js.map