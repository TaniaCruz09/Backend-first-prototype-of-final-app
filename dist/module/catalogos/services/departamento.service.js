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
exports.DepartamentoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const departamento_entity_1 = require("../entities/departamento.entity");
const typeorm_2 = require("typeorm");
const utilities_1 = require("../../../common/helpers/utilities");
let DepartamentoService = class DepartamentoService {
    constructor(departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
    }
    async create(departamento) {
        try {
            return await this.departamentoRepository.save(departamento);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const departamento = await this.departamentoRepository.findOne({ where: { id } });
            return departamento;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            return await this.departamentoRepository.find();
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, updateDepartamentoDTO) {
        try {
            const departamento = await this.departamentoRepository.preload({
                id,
                ...updateDepartamentoDTO,
            });
            return await this.departamentoRepository.save(departamento);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id) {
        try {
            const result = await this.departamentoRepository.delete(id);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.DepartamentoService = DepartamentoService;
exports.DepartamentoService = DepartamentoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(departamento_entity_1.Departamento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DepartamentoService);
//# sourceMappingURL=departamento.service.js.map