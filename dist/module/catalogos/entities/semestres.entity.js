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
exports.SemestreEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const moment = require("moment-timezone");
const entities_1 = require("../../auth/entities");
let SemestreEntity = class SemestreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, abreviatura: { required: true, type: () => String }, semestre: { required: true, type: () => String }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number }, user_create: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_update: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_delete: { required: true, type: () => require("../../auth/entities/user.entity").User } };
    }
};
exports.SemestreEntity = SemestreEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int4'
    }),
    __metadata("design:type", Number)
], SemestreEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'abreviatura',
        type: 'varchar',
        nullable: false,
        length: 30,
    }),
    __metadata("design:type", String)
], SemestreEntity.prototype, "abreviatura", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'semestre',
        type: 'varchar',
        nullable: false,
        length: 30,
    }),
    __metadata("design:type", String)
], SemestreEntity.prototype, "semestre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_create_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], SemestreEntity.prototype, "user_create_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at', type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        transformer: {
            to: (value) => value,
            from: (value) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A')
        }
    }),
    __metadata("design:type", Date)
], SemestreEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'update_at', type: 'timestamp', onUpdate: "CURRENT_TIMESTAMP",
        transformer: {
            to: (value) => value,
            from: (value) => moment(value).tz('America/Managua').format('YYYY-MM-DD hh:mm A')
        }
    }),
    __metadata("design:type", Date)
], SemestreEntity.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_update_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], SemestreEntity.prototype, "user_update_id", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], SemestreEntity.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], SemestreEntity.prototype, "deleted_at_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_create_id' }),
    __metadata("design:type", entities_1.User)
], SemestreEntity.prototype, "user_create", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id', }),
    __metadata("design:type", entities_1.User)
], SemestreEntity.prototype, "user_update", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_at_id' }),
    __metadata("design:type", entities_1.User)
], SemestreEntity.prototype, "user_delete", void 0);
exports.SemestreEntity = SemestreEntity = __decorate([
    (0, typeorm_1.Entity)({ schema: 'catalogos', name: 'semestre' })
], SemestreEntity);
//# sourceMappingURL=semestres.entity.js.map