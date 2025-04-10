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
exports.CalificacionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const calificacion_entity_1 = require("./entities/calificacion.entity");
const typeorm_2 = require("typeorm");
const utilities_1 = require("../../common/helpers/utilities");
let CalificacionesService = class CalificacionesService {
    constructor(calificacionRepo) {
        this.calificacionRepo = calificacionRepo;
    }
    async create(payload) {
        try {
            const calificacion = await this.calificacionRepo.create(payload);
            return await this.calificacionRepo.save(calificacion);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            return await this.calificacionRepo.find({
                relations: ['estudiante', 'asignatura']
            });
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const calificacion = await this.calificacionRepo.findOne({
                where: { id },
                relations: ['estudiante', 'asignatura']
            });
            return calificacion;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload) {
        try {
            const calificaciones = await this.calificacionRepo.preload({ id, ...payload });
            return await this.calificacionRepo.save(calificaciones);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async remove(id) {
        try {
            const result = await this.calificacionRepo.delete(id);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.CalificacionesService = CalificacionesService;
exports.CalificacionesService = CalificacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(calificacion_entity_1.Calificaciones)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CalificacionesService);
//# sourceMappingURL=calificaciones.service.js.map