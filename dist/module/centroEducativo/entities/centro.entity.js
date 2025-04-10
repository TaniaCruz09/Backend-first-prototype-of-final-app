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
exports.Centro = void 0;
const openapi = require("@nestjs/swagger");
const entities_1 = require("../../auth/entities");
const catalogos_1 = require("../../catalogos");
const typeorm_1 = require("typeorm");
let Centro = class Centro {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, nombreCentro: { required: true, type: () => String }, codigoEstablecimiento: { required: true, type: () => String }, codigoCentro: { required: true, type: () => String }, direccionCentro: { required: true, type: () => String }, user: { required: true, type: () => require("../../auth/entities/user.entity").User }, userUpdate: { required: false, type: () => require("../../auth/entities/user.entity").User }, createdAt: { required: false, type: () => Date }, updatedAt: { required: false, type: () => Date }, departamento: { required: true, type: () => require("../../catalogos/entities/departamento.entity").Departamento }, municipio: { required: true, type: () => require("../../catalogos/entities/municipio.entity").Municipio } };
    }
};
exports.Centro = Centro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', {
        name: 'id',
        type: 'int4',
    }),
    __metadata("design:type", Number)
], Centro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre_centro',
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], Centro.prototype, "nombreCentro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'codigo_establecimiento',
        type: 'varchar',
        length: 50,
        unique: true,
    }),
    __metadata("design:type", String)
], Centro.prototype, "codigoEstablecimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'codigo_centro',
        type: 'varchar',
        length: 50,
        unique: true,
    }),
    __metadata("design:type", String)
], Centro.prototype, "codigoCentro", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'direccion_centro',
        type: 'text',
    }),
    __metadata("design:type", String)
], Centro.prototype, "direccionCentro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.User)
], Centro.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.User, (user) => user.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_update_id' }),
    __metadata("design:type", entities_1.User)
], Centro.prototype, "userUpdate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Centro.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Centro.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Departamento, (departamento) => departamento.centro),
    (0, typeorm_1.JoinColumn)({ name: 'departamento' }),
    __metadata("design:type", catalogos_1.Departamento)
], Centro.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => catalogos_1.Municipio, (municipio) => municipio.centro),
    (0, typeorm_1.JoinColumn)({ name: 'municipio' }),
    __metadata("design:type", catalogos_1.Municipio)
], Centro.prototype, "municipio", void 0);
exports.Centro = Centro = __decorate([
    (0, typeorm_1.Entity)({ name: 'centro' })
], Centro);
//# sourceMappingURL=centro.entity.js.map