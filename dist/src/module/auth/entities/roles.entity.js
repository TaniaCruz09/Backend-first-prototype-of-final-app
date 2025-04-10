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
exports.Role = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Role = class Role {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, role: { required: true, type: () => String }, users: { required: true, type: () => [require("./user.entity").User] }, is_active: { required: true, type: () => Boolean }, delete_at: { required: true, type: () => Date } };
    }
};
exports.Role = Role;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int4' }),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Role.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.roles),
    __metadata("design:type", Array)
], Role.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_active',
        type: 'boolean',
        nullable: false,
        default: true,
    }),
    __metadata("design:type", Boolean)
], Role.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Role.prototype, "delete_at", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)({ name: 'roles' })
], Role);
//# sourceMappingURL=roles.entity.js.map