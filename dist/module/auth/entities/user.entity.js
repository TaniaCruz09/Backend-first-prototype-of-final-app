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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const roles_entity_1 = require("./roles.entity");
const catalogos_1 = require("../../catalogos");
const createEstudents_1 = require("../../createEstudents");
const semestres_entity_1 = require("../../catalogos/entities/semestres.entity");
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, token: { required: true, type: () => String }, professions: { required: true, type: () => require("../../catalogos/entities/professions.entity").ProfessionsEntity }, academicLevel: { required: true, type: () => require("../../catalogos/entities/academiclevel.entity").AcademicLevelEntity }, gender: { required: true, type: () => require("../../catalogos/entities/gender.entity").GenderEntity }, student: { required: true, type: () => require("../../createEstudents/students.entity").StudentEntity }, sementre: { required: true, type: () => require("../../catalogos/entities/semestres.entity").SemestreEntity }, roles: { required: true, type: () => [require("./roles.entity").Role] }, isActive: { required: true, type: () => Boolean } };
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int4' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 100, nullable: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password', type: 'varchar', length: 100, nullable: false, select: true, }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.ProfessionsEntity, (professions) => professions.id),
    __metadata("design:type", catalogos_1.ProfessionsEntity)
], User.prototype, "professions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.AcademicLevelEntity, (academicLevel) => academicLevel.id),
    __metadata("design:type", catalogos_1.AcademicLevelEntity)
], User.prototype, "academicLevel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.GenderEntity, (gender) => gender.id),
    __metadata("design:type", catalogos_1.GenderEntity)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => createEstudents_1.StudentEntity, (student) => student.id),
    __metadata("design:type", createEstudents_1.StudentEntity)
], User.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => semestres_entity_1.SemestreEntity, (sementre) => sementre.id),
    __metadata("design:type", semestres_entity_1.SemestreEntity)
], User.prototype, "sementre", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => roles_entity_1.Role, (role) => role.users),
    (0, typeorm_1.JoinTable)({
        name: 'user_has_roles',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
            foreignKeyConstraintName: 'fk_user_id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
            foreignKeyConstraintName: 'fk_role_id',
        },
    }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', nullable: false, default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: "users" })
], User);
//# sourceMappingURL=user.entity.js.map