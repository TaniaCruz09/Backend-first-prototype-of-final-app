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
exports.GradesEntity = void 0;
const openapi = require("@nestjs/swagger");
const grupos_entity_1 = require("../../../module/grupos/entities/grupos.entity");
const typeorm_1 = require("typeorm");
let GradesEntity = class GradesEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, grades: { required: true, type: () => String }, grupos: { required: false, type: () => [require("../../grupos/entities/grupos.entity").Grupos] } };
    }
};
exports.GradesEntity = GradesEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int4',
    }),
    __metadata("design:type", Number)
], GradesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'grades',
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], GradesEntity.prototype, "grades", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => grupos_entity_1.Grupos, (grupo) => grupo.grado),
    __metadata("design:type", Array)
], GradesEntity.prototype, "grupos", void 0);
exports.GradesEntity = GradesEntity = __decorate([
    (0, typeorm_1.Entity)({ schema: 'catalogos', name: 'grades' })
], GradesEntity);
//# sourceMappingURL=grades.entity.js.map