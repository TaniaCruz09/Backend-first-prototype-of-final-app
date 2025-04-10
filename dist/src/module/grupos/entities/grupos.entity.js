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
exports.Grupos = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const catalogos_1 = require("../../catalogos");
const docentes_entity_1 = require("../../docentes/docentes.entity");
const gruposConEstudiantes_entity_1 = require("./gruposConEstudiantes.entity");
const entities_1 = require("../../../module/auth/entities");
const moment = require("moment-timezone");
const organizacionEscolar_entity_1 = require("./organizacionEscolar.entity.");
let Grupos = class Grupos {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, grado: { required: true, type: () => require("../../catalogos/entities/grades.entity").GradesEntity }, seccion: { required: true, type: () => require("../../catalogos/entities/seccion.entity").Seccion }, modalidad: { required: true, type: () => require("../../catalogos/entities/modalidad.entity").Modalidad }, turno: { required: true, type: () => require("../../catalogos/entities/turnos.entity").Turno }, docente: { required: true, type: () => require("../../docentes/docentes.entity").Docentes }, grupoConEstudiantes: { required: false, type: () => require("./gruposConEstudiantes.entity").GruposConEstudiantes }, organizacionEscolar: { required: true, type: () => require("./organizacionEscolar.entity.").OrganizacionEscolar }, anio_lectivo: { required: true, type: () => Number }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number }, user_create: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_update: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_delete: { required: true, type: () => require("../../auth/entities/user.entity").User } };
    }
};
exports.Grupos = Grupos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int2',
    }),
    __metadata("design:type", Number)
], Grupos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.GradesEntity, (grado) => grado.grupos),
    __metadata("design:type", catalogos_1.GradesEntity)
], Grupos.prototype, "grado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Seccion, (seccion) => seccion.grupos),
    __metadata("design:type", catalogos_1.Seccion)
], Grupos.prototype, "seccion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Modalidad, (modalidad) => modalidad.grupos),
    __metadata("design:type", catalogos_1.Modalidad)
], Grupos.prototype, "modalidad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Turno, (turno) => turno.grupos),
    __metadata("design:type", catalogos_1.Turno)
], Grupos.prototype, "turno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docentes_entity_1.Docentes, (docente) => docente.grupos),
    __metadata("design:type", docentes_entity_1.Docentes)
], Grupos.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => gruposConEstudiantes_entity_1.GruposConEstudiantes, (grupoConEstudiantes) => grupoConEstudiantes.grupo),
    __metadata("design:type", gruposConEstudiantes_entity_1.GruposConEstudiantes)
], Grupos.prototype, "grupoConEstudiantes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organizacionEscolar_entity_1.OrganizacionEscolar, (organizacionEscolar) => organizacionEscolar.grupo),
    __metadata("design:type", organizacionEscolar_entity_1.OrganizacionEscolar)
], Grupos.prototype, "organizacionEscolar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anio_lectivo', type: 'int2', nullable: true }),
    __metadata("design:type", Number)
], Grupos.prototype, "anio_lectivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_create_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Grupos.prototype, "user_create_id", void 0);
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
], Grupos.prototype, "created_at", void 0);
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
], Grupos.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_update_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Grupos.prototype, "user_update_id", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Grupos.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Grupos.prototype, "deleted_at_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_create_id' }),
    __metadata("design:type", entities_1.User)
], Grupos.prototype, "user_create", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id' }),
    __metadata("design:type", entities_1.User)
], Grupos.prototype, "user_update", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_at_id' }),
    __metadata("design:type", entities_1.User)
], Grupos.prototype, "user_delete", void 0);
exports.Grupos = Grupos = __decorate([
    (0, typeorm_1.Entity)({ name: 'grupos' })
], Grupos);
//# sourceMappingURL=grupos.entity.js.map