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
exports.Departamento = void 0;
const openapi = require("@nestjs/swagger");
const createEstudents_1 = require("../../createEstudents");
const docentes_entity_1 = require("../../docentes/docentes.entity");
const typeorm_1 = require("typeorm");
const centro_entity_1 = require("../../centroEducativo/entities/centro.entity");
let Departamento = class Departamento {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, departamento: { required: true, type: () => String }, docente: { required: false, type: () => require("../../docentes/docentes.entity").Docentes }, student: { required: false, type: () => require("../../createEstudents/students.entity").StudentEntity }, centro: { required: false, type: () => require("../../centroEducativo/entities/centro.entity").Centro } };
    }
};
exports.Departamento = Departamento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Departamento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 100,
        name: 'departamento',
    }),
    __metadata("design:type", String)
], Departamento.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => docentes_entity_1.Docentes, (docente) => docente.departamento),
    __metadata("design:type", docentes_entity_1.Docentes)
], Departamento.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => createEstudents_1.StudentEntity, (student) => student.departamento),
    __metadata("design:type", createEstudents_1.StudentEntity)
], Departamento.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => centro_entity_1.Centro, (centro) => centro.departamento),
    __metadata("design:type", centro_entity_1.Centro)
], Departamento.prototype, "centro", void 0);
exports.Departamento = Departamento = __decorate([
    (0, typeorm_1.Entity)({ schema: 'catalogos', name: 'departamento' })
], Departamento);
//# sourceMappingURL=departamento.entity.js.map