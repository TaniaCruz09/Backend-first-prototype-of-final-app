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
exports.PaisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pais_entity_1 = require("../entities/pais.entity");
const typeorm_2 = require("typeorm");
const utilities_1 = require("../../../common/helpers/utilities");
let PaisService = class PaisService {
    constructor(paisRepository) {
        this.paisRepository = paisRepository;
    }
    async createPais(pais) {
        try {
            return await this.paisRepository.save(pais);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findOne(id) {
        try {
            const pais = await this.paisRepository.findOne({ where: { id } });
            return pais;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async findAll() {
        try {
            return await this.paisRepository.find();
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async update(id, updatePaisDTO) {
        try {
            const pais = await this.paisRepository.preload({
                id,
                ...updatePaisDTO,
            });
            return await this.paisRepository.save(pais);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async delete(id) {
        try {
            const result = await this.paisRepository.findOne({
                where: { id: id }
            });
            return await this.paisRepository.remove(result);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.PaisService = PaisService;
exports.PaisService = PaisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pais_entity_1.Pais)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaisService);
//# sourceMappingURL=pais.service.js.map