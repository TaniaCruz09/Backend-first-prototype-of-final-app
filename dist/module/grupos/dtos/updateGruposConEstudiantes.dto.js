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
exports.UpdateGrupoConEstudiantesDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const grupos_entity_1 = require("../entities/grupos.entity");
const createEstudents_1 = require("../../createEstudents");
const catalogos_1 = require("../../catalogos");
class UpdateGrupoConEstudiantesDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, grupo: { required: false, type: () => require("../entities/grupos.entity").Grupos }, estudiante: { required: false, type: () => require("../../createEstudents/students.entity").StudentEntity }, asignatura: { required: false, type: () => require("../../catalogos/entities/asignatura.entity").Asignatura }, user_create_id: { required: false, type: () => Number }, created_at: { required: false, type: () => Date }, update_at: { required: false, type: () => Date }, user_update_id: { required: false, type: () => Number }, deleted_at: { required: false, type: () => Date }, deleted_at_id: { required: false, type: () => Number } };
    }
}
exports.UpdateGrupoConEstudiantesDto = UpdateGrupoConEstudiantesDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoConEstudiantesDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", grupos_entity_1.Grupos)
], UpdateGrupoConEstudiantesDto.prototype, "grupo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", createEstudents_1.StudentEntity)
], UpdateGrupoConEstudiantesDto.prototype, "estudiante", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Asignatura)
], UpdateGrupoConEstudiantesDto.prototype, "asignatura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoConEstudiantesDto.prototype, "user_create_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateGrupoConEstudiantesDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateGrupoConEstudiantesDto.prototype, "update_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoConEstudiantesDto.prototype, "user_update_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateGrupoConEstudiantesDto.prototype, "deleted_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoConEstudiantesDto.prototype, "deleted_at_id", void 0);
//# sourceMappingURL=updateGruposConEstudiantes.dto.js.map