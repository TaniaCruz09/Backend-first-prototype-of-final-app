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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calificaciones = void 0;
const openapi = require("@nestjs/swagger");
const catalogos_1 = require("../../catalogos");
const createEstudents_1 = require("../../createEstudents");
const typeorm_1 = require("typeorm");
let Calificaciones = class Calificaciones {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, estudiante: { required: true, type: () => require("../../createEstudents/students.entity").StudentEntity }, asignatura: { required: true, type: () => require("../../catalogos/entities/asignatura.entity").Asignatura }, notaCualitativa: { required: true, type: () => String }, notaCuantitativa: { required: false, type: () => Number } };
    }
};
exports.Calificaciones = Calificaciones;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', {
        name: 'id',
        type: 'int4',
    }),
    __metadata("design:type", Number)
], Calificaciones.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => createEstudents_1.StudentEntity, (estudiante) => estudiante.id),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", createEstudents_1.StudentEntity)
], Calificaciones.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Asignatura, (asignatura) => asignatura.id),
    (0, typeorm_1.JoinColumn)({ name: 'asignatura_id' }),
    __metadata("design:type", catalogos_1.Asignatura)
], Calificaciones.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nota_cualitativa',
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Calificaciones.prototype, "notaCualitativa", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nota_cuantitativa',
        type: 'int4',
    }),
    __metadata("design:type", Number)
], Calificaciones.prototype, "notaCuantitativa", void 0);
exports.Calificaciones = Calificaciones = __decorate([
    (0, typeorm_1.Entity)({ schema: 'calificaciones', name: 'calificaciones' })
], Calificaciones);
//# sourceMappingURL=calificacion.entity.js.map