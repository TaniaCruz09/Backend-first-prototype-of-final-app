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
exports.StudentEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const catalogos_1 = require("../catalogos");
const gruposConEstudiantes_entity_1 = require("../grupos/entities/gruposConEstudiantes.entity");
const moment = require("moment-timezone");
const entities_1 = require("../auth/entities");
let StudentEntity = class StudentEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, studentCode: { required: true, type: () => String }, identityCard: { required: true, type: () => String }, dateBirt: { required: true, type: () => Date }, address: { required: true, type: () => String }, tutorName: { required: true, type: () => String }, tutorIdentityCard: { required: true, type: () => String }, tutorPhoneNumber: { required: true, type: () => String }, observations: { required: true, type: () => String }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number }, user_create: { required: true, type: () => require("../auth/entities/user.entity").User }, user_update: { required: true, type: () => require("../auth/entities/user.entity").User }, user_delete: { required: true, type: () => require("../auth/entities/user.entity").User }, pais: { required: true, type: () => require("../catalogos/entities/pais.entity").Pais }, gender: { required: true, type: () => require("../catalogos/entities/gender.entity").GenderEntity }, departamento: { required: true, type: () => require("../catalogos/entities/departamento.entity").Departamento }, municipio: { required: true, type: () => require("../catalogos/entities/municipio.entity").Municipio }, grupoConEstudiantes: { required: false, type: () => require("../grupos/entities/gruposConEstudiantes.entity").GruposConEstudiantes } };
    }
};
exports.StudentEntity = StudentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int4',
    }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombres',
        type: 'varchar',
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'apellidos',
        type: 'varchar',
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'codigo_estudiante',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "studentCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cedula_identidad',
        type: 'varchar',
        length: 16,
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "identityCard", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_nacimiento',
        type: 'date',
        nullable: true,
    }),
    __metadata("design:type", Date)
], StudentEntity.prototype, "dateBirt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'direccion_domiciliar',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Nombre_tutor',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "tutorName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'maestro_cedula_identidad',
        type: 'varchar',
        length: 16,
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "tutorIdentityCard", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Numero',
        type: 'varchar',
        length: 8,
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "tutorPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'observaciones',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_create_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "user_create_id", void 0);
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
], StudentEntity.prototype, "created_at", void 0);
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
], StudentEntity.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_update_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "user_update_id", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], StudentEntity.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "deleted_at_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_create_id' }),
    __metadata("design:type", entities_1.User)
], StudentEntity.prototype, "user_create", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id' }),
    __metadata("design:type", entities_1.User)
], StudentEntity.prototype, "user_update", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_at_id' }),
    __metadata("design:type", entities_1.User)
], StudentEntity.prototype, "user_delete", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Pais, (pais) => pais.id),
    (0, typeorm_1.JoinColumn)({ name: 'pais_id' }),
    __metadata("design:type", catalogos_1.Pais)
], StudentEntity.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.GenderEntity, (gender) => gender.id),
    (0, typeorm_1.JoinColumn)({ name: 'genero_id' }),
    __metadata("design:type", catalogos_1.GenderEntity)
], StudentEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Departamento, (departmento) => departmento.id),
    (0, typeorm_1.JoinColumn)({ name: 'departamento_id' }),
    __metadata("design:type", catalogos_1.Departamento)
], StudentEntity.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Municipio, (municipio) => municipio.id),
    (0, typeorm_1.JoinColumn)({ name: 'municipio_id' }),
    __metadata("design:type", catalogos_1.Municipio)
], StudentEntity.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gruposConEstudiantes_entity_1.GruposConEstudiantes, (grupoConEstudiantes) => grupoConEstudiantes.id),
    __metadata("design:type", gruposConEstudiantes_entity_1.GruposConEstudiantes)
], StudentEntity.prototype, "grupoConEstudiantes", void 0);
exports.StudentEntity = StudentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'student' })
], StudentEntity);
//# sourceMappingURL=students.entity.js.map