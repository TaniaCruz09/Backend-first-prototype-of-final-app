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
exports.Pais = void 0;
const openapi = require("@nestjs/swagger");
const students_entity_1 = require("../../createEstudents/students.entity");
const docentes_entity_1 = require("../../docentes/docentes.entity");
const typeorm_1 = require("typeorm");
let Pais = class Pais {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, pais: { required: true, type: () => String }, docente: { required: false, type: () => require("../../docentes/docentes.entity").Docentes }, student: { required: false, type: () => require("../../createEstudents/students.entity").StudentEntity } };
    }
};
exports.Pais = Pais;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pais.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 30,
        name: 'pais',
    }),
    __metadata("design:type", String)
], Pais.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => docentes_entity_1.Docentes, (docente) => docente.pais),
    __metadata("design:type", docentes_entity_1.Docentes)
], Pais.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => students_entity_1.StudentEntity, (student) => student.pais),
    __metadata("design:type", students_entity_1.StudentEntity)
], Pais.prototype, "student", void 0);
exports.Pais = Pais = __decorate([
    (0, typeorm_1.Entity)({ schema: 'catalogos', name: 'pais' })
], Pais);
//# sourceMappingURL=pais.entity.js.map