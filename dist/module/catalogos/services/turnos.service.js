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
exports.TurnoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const turnos_entity_1 = require("../entities/turnos.entity");
const utilities_1 = require("../../../common/helpers/utilities");
let TurnoService = class TurnoService {
    constructor(turnoRepository) {
        this.turnoRepository = turnoRepository;
    }
    async create(payload) {
        try {
            const turno = await this.turnoRepository.create(payload);
            return await this.turnoRepository.save(turno);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            const turno = await this.turnoRepository.find();
            return turno;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const turno = await this.turnoRepository.findOne({ where: { id } });
            return turno;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, payload) {
        try {
            const turno = await this.turnoRepository.findOne({ where: { id } });
            if (!turno) {
                throw new common_1.NotFoundException('Profesión no encontrada');
            }
            Object.assign(turno, payload);
            turno.update_at = new Date();
            turno.user_update_id;
            return await this.turnoRepository.save(turno);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id, userId) {
        try {
            const turno = await this.turnoRepository.findOne({ where: { id } });
            if (!turno) {
                throw new common_1.NotFoundException('Profesión no encontrada');
            }
            turno.deleted_at = new Date();
            turno.deleted_at_id = userId;
            return await this.turnoRepository.save(turno);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.TurnoService = TurnoService;
exports.TurnoService = TurnoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(turnos_entity_1.Turno)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TurnoService);
//# sourceMappingURL=turnos.service.js.map