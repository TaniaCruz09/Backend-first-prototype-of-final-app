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
exports.CreateGrupoDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const catalogos_1 = require("../../catalogos");
const docentes_entity_1 = require("../../docentes/docentes.entity");
const gruposConEstudiantes_entity_1 = require("../entities/gruposConEstudiantes.entity");
const organizacionEscolar_entity_1 = require("../entities/organizacionEscolar.entity.");
class CreateGrupoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, grado: { required: true, type: () => require("../../catalogos/entities/grades.entity").GradesEntity }, seccion: { required: true, type: () => require("../../catalogos/entities/seccion.entity").Seccion }, modalidad: { required: true, type: () => require("../../catalogos/entities/modalidad.entity").Modalidad }, turno: { required: true, type: () => require("../../catalogos/entities/turnos.entity").Turno }, docente: { required: true, type: () => require("../../docentes/docentes.entity").Docentes }, organizacionEscolar: { required: false, type: () => require("../entities/organizacionEscolar.entity.").OrganizacionEscolar }, grupoConEstudiantes: { required: false, type: () => require("../entities/gruposConEstudiantes.entity").GruposConEstudiantes }, anio_lectivo: { required: true, type: () => Number }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number } };
    }
}
exports.CreateGrupoDto = CreateGrupoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGrupoDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.GradesEntity)
], CreateGrupoDto.prototype, "grado", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Seccion)
], CreateGrupoDto.prototype, "seccion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Modalidad)
], CreateGrupoDto.prototype, "modalidad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Turno)
], CreateGrupoDto.prototype, "turno", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", docentes_entity_1.Docentes)
], CreateGrupoDto.prototype, "docente", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", organizacionEscolar_entity_1.OrganizacionEscolar)
], CreateGrupoDto.prototype, "organizacionEscolar", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", gruposConEstudiantes_entity_1.GruposConEstudiantes)
], CreateGrupoDto.prototype, "grupoConEstudiantes", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGrupoDto.prototype, "anio_lectivo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGrupoDto.prototype, "user_create_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateGrupoDto.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateGrupoDto.prototype, "update_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGrupoDto.prototype, "user_update_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateGrupoDto.prototype, "deleted_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateGrupoDto.prototype, "deleted_at_id", void 0);
//# sourceMappingURL=grupos.dto.js.map