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
exports.UpdateGrupoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const catalogos_1 = require("../../catalogos");
const docentes_entity_1 = require("../../docentes/docentes.entity");
class UpdateGrupoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, grado: { required: false, type: () => require("../../catalogos/entities/grades.entity").GradesEntity }, seccion: { required: false, type: () => require("../../catalogos/entities/seccion.entity").Seccion }, modalidad: { required: false, type: () => require("../../catalogos/entities/modalidad.entity").Modalidad }, turno: { required: false, type: () => require("../../catalogos/entities/turnos.entity").Turno }, docente: { required: false, type: () => require("../../docentes/docentes.entity").Docentes }, user_create_id: { required: false, type: () => Number }, created_at: { required: false, type: () => Date }, update_at: { required: false, type: () => Date }, user_update_id: { required: false, type: () => Number }, deleted_at: { required: false, type: () => Date }, deleted_at_id: { required: false, type: () => Number } };
    }
}
exports.UpdateGrupoDto = UpdateGrupoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.GradesEntity)
], UpdateGrupoDto.prototype, "grado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Seccion)
], UpdateGrupoDto.prototype, "seccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Modalidad)
], UpdateGrupoDto.prototype, "modalidad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Turno)
], UpdateGrupoDto.prototype, "turno", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", docentes_entity_1.Docentes)
], UpdateGrupoDto.prototype, "docente", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoDto.prototype, "user_create_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateGrupoDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateGrupoDto.prototype, "update_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoDto.prototype, "user_update_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UpdateGrupoDto.prototype, "deleted_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateGrupoDto.prototype, "deleted_at_id", void 0);
//# sourceMappingURL=Update-grupo.dto.js.map