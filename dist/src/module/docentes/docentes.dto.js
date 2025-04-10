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
exports.DocentesDTO = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const catalogos_1 = require("../catalogos");
class DocentesDTO {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, nombres: { required: true, type: () => String, maxLength: 100 }, apellido_paterno: { required: true, type: () => String, maxLength: 50 }, apellido_materno: { required: true, type: () => String, maxLength: 50 }, cedula_identidad: { required: true, type: () => String, maxLength: 16 }, sexo: { required: true, type: () => require("../catalogos/entities/gender.entity").GenderEntity }, nivel_academico: { required: true, type: () => [require("../catalogos/entities/academiclevel.entity").AcademicLevelEntity] }, profesion: { required: true, type: () => [require("../catalogos/entities/professions.entity").ProfessionsEntity] }, telefono: { required: true, type: () => String }, fecha_nacimiento: { required: true, type: () => Date }, pais: { required: true, type: () => require("../catalogos/entities/pais.entity").Pais }, departamento: { required: true, type: () => require("../catalogos/entities/departamento.entity").Departamento }, municipio: { required: true, type: () => require("../catalogos/entities/municipio.entity").Municipio }, direccion_domiciliar: { required: true, type: () => String }, fechaContratado: { required: true, type: () => Date }, nombre_contacto_emergencia: { required: true, type: () => String, maxLength: 150 }, telefono_contacto_emergencia: { required: true, type: () => String }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number } };
    }
}
exports.DocentesDTO = DocentesDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DocentesDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], DocentesDTO.prototype, "nombres", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], DocentesDTO.prototype, "apellido_paterno", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], DocentesDTO.prototype, "apellido_materno", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(16),
    __metadata("design:type", String)
], DocentesDTO.prototype, "cedula_identidad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.GenderEntity)
], DocentesDTO.prototype, "sexo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], DocentesDTO.prototype, "nivel_academico", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], DocentesDTO.prototype, "profesion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocentesDTO.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], DocentesDTO.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Pais)
], DocentesDTO.prototype, "pais", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Departamento)
], DocentesDTO.prototype, "departamento", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", catalogos_1.Municipio)
], DocentesDTO.prototype, "municipio", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocentesDTO.prototype, "direccion_domiciliar", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], DocentesDTO.prototype, "fechaContratado", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(150),
    __metadata("design:type", String)
], DocentesDTO.prototype, "nombre_contacto_emergencia", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DocentesDTO.prototype, "telefono_contacto_emergencia", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DocentesDTO.prototype, "user_create_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], DocentesDTO.prototype, "created_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], DocentesDTO.prototype, "update_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DocentesDTO.prototype, "user_update_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], DocentesDTO.prototype, "deleted_at", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DocentesDTO.prototype, "deleted_at_id", void 0);
//# sourceMappingURL=docentes.dto.js.map