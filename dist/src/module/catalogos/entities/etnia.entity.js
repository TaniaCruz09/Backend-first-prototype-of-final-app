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
exports.Etnia = void 0;
const openapi = require("@nestjs/swagger");
const moment = require("moment-timezone");
const entities_1 = require("../../../module/auth/entities");
const typeorm_1 = require("typeorm");
let Etnia = class Etnia {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, etnia: { required: true, type: () => String }, user_create_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, update_at: { required: true, type: () => Date }, user_update_id: { required: true, type: () => Number }, deleted_at: { required: true, type: () => Date }, deleted_at_id: { required: true, type: () => Number }, user_create: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_update: { required: true, type: () => require("../../auth/entities/user.entity").User }, user_delete: { required: true, type: () => require("../../auth/entities/user.entity").User } };
    }
};
exports.Etnia = Etnia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int4',
    }),
    __metadata("design:type", Number)
], Etnia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'etnia',
        type: 'varchar',
        length: 50,
    }),
    __metadata("design:type", String)
], Etnia.prototype, "etnia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_create_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Etnia.prototype, "user_create_id", void 0);
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
], Etnia.prototype, "created_at", void 0);
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
], Etnia.prototype, "update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_update_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Etnia.prototype, "user_update_id", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Etnia.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deleted_at_id', type: 'int4', nullable: true }),
    __metadata("design:type", Number)
], Etnia.prototype, "deleted_at_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_create_id' }),
    __metadata("design:type", entities_1.User)
], Etnia.prototype, "user_create", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id' }),
    __metadata("design:type", entities_1.User)
], Etnia.prototype, "user_update", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_at_id' }),
    __metadata("design:type", entities_1.User)
], Etnia.prototype, "user_delete", void 0);
exports.Etnia = Etnia = __decorate([
    (0, typeorm_1.Entity)({ schema: 'catalogos', name: 'etnia' })
], Etnia);
//# sourceMappingURL=etnia.entity.js.map