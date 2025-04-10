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
exports.Modalidad = void 0;
const openapi = require("@nestjs/swagger");
const moment = require("moment-timezone");
const grupos_entity_1 = require("../../../module/grupos/entities/grupos.entity");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../module/auth/entities");
let Modalidad = class Modalidad {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, modalidad: { required: true, type: () => String }, grupos: { required: false, type: () => [require("../../grupos/entities/grupos.entity").Grupos] }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number }, user_create: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_update: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_delete: { required: true, type: () => require("../../auth/entities/user.entity").User } };
    }
};
exports.Modalidad = Modalidad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int4',
    }),
    __metadata("design:type", Number)
], Modalidad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'modalidad',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Modalidad.prototype, "modalidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, (grupo) => grupo.modalidad),
    __metadata("design:type", Array)
], Modalidad.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_create_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Modalidad.prototype, "user_create_id", void 0);
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
], Modalidad.prototype, "created_at", void 0);
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
], Modalidad.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_update_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Modalidad.prototype, "user_update_id", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Modalidad.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Modalidad.prototype, "deleted_at_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_create_id' }),
    __metadata("design:type", entities_1.User)
], Modalidad.prototype, "user_create", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id' }),
    __metadata("design:type", entities_1.User)
], Modalidad.prototype, "user_update", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_at_id' }),
    __metadata("design:type", entities_1.User)
], Modalidad.prototype, "user_delete", void 0);
exports.Modalidad = Modalidad = __decorate([
    (0, typeorm_1.Entity)({ schema: 'catalogos', name: 'modalidad' })
], Modalidad);
//# sourceMappingURL=modalidad.entity.js.map