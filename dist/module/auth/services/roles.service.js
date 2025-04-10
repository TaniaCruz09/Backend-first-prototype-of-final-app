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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../entities");
let RolesService = class RolesService {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    async getRolesById(id) {
        const role = await this.roleRepo.findOne({
            where: { id },
        });
        return role;
    }
    async getRoles(query) {
        const rows = this.roleRepo.createQueryBuilder('pepito').where('id <> 0');
        console.log(query);
        if (query.role)
            rows.andWhere('pepito.role ILIKE :role', { role: `%${query.role}%` });
        if (query.is_active === 'true')
            rows.andWhere('pepito.is_active = :is_active', {
                is_active: true,
            });
        if (query.is_active === 'false')
            rows.andWhere('pepito.is_active = :is_active', {
                is_active: false,
            });
        rows.orderBy('pepito.id', 'ASC');
        return await rows.getMany();
    }
    async createRole(payload) {
        const newRole = this.roleRepo.create(payload);
        return await this.roleRepo.save(newRole);
    }
    async updateRole(id, payload) {
        const role = await this.roleRepo.preload({ id, ...payload });
        return await this.roleRepo.save(role);
    }
    async deleteRole(id) {
        const role = await this.getRolesById(id);
        if (!role) {
            throw new common_1.NotFoundException("Role doesn't exist");
        }
        const deleted = await this.roleRepo.softDelete({ id: id });
        return role;
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map