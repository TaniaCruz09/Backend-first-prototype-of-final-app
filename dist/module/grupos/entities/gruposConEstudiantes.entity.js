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
exports.GruposConEstudiantes = void 0;
const openapi = require("@nestjs/swagger");
const createEstudents_1 = require("../../createEstudents");
const typeorm_1 = require("typeorm");
const grupos_entity_1 = require("./grupos.entity");
const entities_1 = require("../../../module/auth/entities");
const moment = require("moment-timezone");
const catalogos_1 = require("../../catalogos");
let GruposConEstudiantes = class GruposConEstudiantes {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, grupo: { required: true, type: () => require("./grupos.entity").Grupos }, estudiante: { required: true, type: () => require("../../createEstudents/students.entity").StudentEntity }, asignatura: { required: true, type: () => require("../../catalogos/entities/asignatura.entity").Asignatura }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number }, user_create: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_update: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_delete: { required: true, type: () => require("../../auth/entities/user.entity").User } };
    }
};
exports.GruposConEstudiantes = GruposConEstudiantes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int2',
    }),
    __metadata("design:type", Number)
], GruposConEstudiantes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => grupos_entity_1.Grupos, (grupo) => grupo.grupoConEstudiantes),
    __metadata("design:type", grupos_entity_1.Grupos)
], GruposConEstudiantes.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => createEstudents_1.StudentEntity, (estudiante) => estudiante.grupoConEstudiantes),
    __metadata("design:type", createEstudents_1.StudentEntity)
], GruposConEstudiantes.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => catalogos_1.Asignatura, (asignatura) => asignatura.gruposConEstudiante),
    __metadata("design:type", catalogos_1.Asignatura)
], GruposConEstudiantes.prototype, "asignatura", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_create_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], GruposConEstudiantes.prototype, "user_create_id", void 0);
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
], GruposConEstudiantes.prototype, "created_at", void 0);
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
], GruposConEstudiantes.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_update_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], GruposConEstudiantes.prototype, "user_update_id", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], GruposConEstudiantes.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], GruposConEstudiantes.prototype, "deleted_at_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_create_id' }),
    __metadata("design:type", entities_1.User)
], GruposConEstudiantes.prototype, "user_create", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id' }),
    __metadata("design:type", entities_1.User)
], GruposConEstudiantes.prototype, "user_update", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_at_id' }),
    __metadata("design:type", entities_1.User)
], GruposConEstudiantes.prototype, "user_delete", void 0);
exports.GruposConEstudiantes = GruposConEstudiantes = __decorate([
    (0, typeorm_1.Entity)({ name: 'gruposConEstudiantes' })
], GruposConEstudiantes);
//# sourceMappingURL=gruposConEstudiantes.entity.js.map