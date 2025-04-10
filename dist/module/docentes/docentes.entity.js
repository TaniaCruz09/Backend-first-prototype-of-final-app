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
exports.Docentes = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const catalogos_1 = require("../catalogos");
const grupos_entity_1 = require("../grupos/entities/grupos.entity");
const entities_1 = require("../../module/auth/entities");
const moment = require("moment-timezone");
let Docentes = class Docentes {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, nombres: { required: true, type: () => String }, apellido_paterno: { required: true, type: () => String }, apellido_materno: { required: true, type: () => String }, cedula_identidad: { required: true, type: () => String }, telefono: { required: true, type: () => String }, fecha_nacimiento: { required: true, type: () => Date }, direccion_domiciliar: { required: true, type: () => String }, fechaContratado: { required: true, type: () => Date }, nombre_contacto_emergencia: { required: true, type: () => String }, telefono_contacto_emergencia: { required: true, type: () => String }, update_at: { required: true, type: () => Date }, created_at: { required: true, type: () => Date }, user_create_id: { required: true, type: () => Number }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number }, sexo: { required: true, type: () => require("../catalogos/entities/gender.entity").GenderEntity }, nivel_academico: { required: true, type: () => [require("../catalogos/entities/academiclevel.entity").AcademicLevelEntity] }, profesion: { required: true, type: () => [require("../catalogos/entities/professions.entity").ProfessionsEntity] }, pais: { required: true, type: () => require("../catalogos/entities/pais.entity").Pais }, departamento: { required: true, type: () => require("../catalogos/entities/departamento.entity").Departamento }, municipio: { required: true, type: () => require("../catalogos/entities/municipio.entity").Municipio }, grupos: { required: false, type: () => [require("../grupos/entities/grupos.entity").Grupos] }, user_create: { required: true, type: () => require("../auth/entities/user.entity").User }, user_update: { required: true, type: () => require("../auth/entities/user.entity").User }, user_delete: { required: true, type: () => require("../auth/entities/user.entity").User } };
    }
};
exports.Docentes = Docentes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int2',
    }),
    __metadata("design:type", Number)
], Docentes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombres',
        type: 'varchar',
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'apellido_paterno',
        type: 'varchar',
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "apellido_paterno", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'apellido_materno',
        type: 'varchar',
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "apellido_materno", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cedula_identidad',
        type: 'varchar',
        length: 16,
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "cedula_identidad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'telefono',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_nacimiento',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Docentes.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'direccion_domiciliar',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "direccion_domiciliar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fechaContratado',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Docentes.prototype, "fechaContratado", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre_contacto_emergencia',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "nombre_contacto_emergencia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'telefono_contacto_emergencia',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Docentes.prototype, "telefono_contacto_emergencia", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'update_at',
        type: 'timestamp',
        onUpdate: 'CURRENT_TIMESTAMP',
        transformer: {
            to: (value) => value,
            from: (value) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A'),
        },
    }),
    __metadata("design:type", Date)
], Docentes.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        transformer: {
            to: (value) => value,
            from: (value) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A'),
        },
    }),
    __metadata("design:type", Date)
], Docentes.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_create_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Docentes.prototype, "user_create_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_update_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Docentes.prototype, "user_update_id", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Docentes.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Docentes.prototype, "deleted_at_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.GenderEntity, (gender) => gender.docente),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", catalogos_1.GenderEntity)
], Docentes.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => catalogos_1.AcademicLevelEntity, (academiclevel) => academiclevel.docente),
    (0, typeorm_1.JoinColumn)({ name: 'nivel_academico_id' }),
    __metadata("design:type", Array)
], Docentes.prototype, "nivel_academico", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => catalogos_1.ProfessionsEntity, (profesion) => profesion.docente),
    (0, typeorm_1.JoinColumn)({ name: 'profesion_id' }),
    __metadata("design:type", Array)
], Docentes.prototype, "profesion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Pais, (pais) => pais.docente),
    (0, typeorm_1.JoinColumn)({ name: 'pais_id' }),
    __metadata("design:type", catalogos_1.Pais)
], Docentes.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Departamento, (departamento) => departamento.docente),
    (0, typeorm_1.JoinColumn)({ name: 'departamente_id' }),
    __metadata("design:type", catalogos_1.Departamento)
], Docentes.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Municipio, (municipio) => municipio.docente),
    (0, typeorm_1.JoinColumn)({ name: 'municipio_id' }),
    __metadata("design:type", catalogos_1.Municipio)
], Docentes.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, (grupo) => grupo.docente),
    (0, typeorm_1.JoinColumn)({ name: 'grupo_id' }),
    __metadata("design:type", Array)
], Docentes.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_create_id' }),
    __metadata("design:type", entities_1.User)
], Docentes.prototype, "user_create", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id' }),
    __metadata("design:type", entities_1.User)
], Docentes.prototype, "user_update", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_at_id' }),
    __metadata("design:type", entities_1.User)
], Docentes.prototype, "user_delete", void 0);
exports.Docentes = Docentes = __decorate([
    (0, typeorm_1.Entity)({ name: 'docentes' })
], Docentes);
//# sourceMappingURL=docentes.entity.js.map