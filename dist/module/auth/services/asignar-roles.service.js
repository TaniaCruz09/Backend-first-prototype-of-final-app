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
exports.AsignarRolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
let AsignarRolesService = class AsignarRolesService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async asignarRol(userId, payload) {
        const roles = await this.getNewsRolesByIds(payload.roles, userId);
        const user = await this.dataSource
            .getRepository(entities_1.User)
            .findOne({ where: { id: userId }, relations: { roles: true } });
        const asignar = [...user.roles, ...roles];
        user.roles = asignar;
        const saved = await this.dataSource.getRepository(entities_1.User).save(user);
        return saved;
    }
    async removerRol(userId, payload) {
        const roles = await this.getAllRolesByIds(payload.roles);
        const user = await this.dataSource
            .getRepository(entities_1.User)
            .findOne({ where: { id: userId }, relations: { roles: true } });
        const remover = user.roles.filter((role) => {
            return !roles.find((r) => r.id === role.id);
        });
        user.roles = remover;
        const saved = await this.dataSource.getRepository(entities_1.User).save(user);
        return saved;
    }
    async getNewsRolesByIds(roles, userId) {
        const list = this.dataSource
            .getRepository(entities_1.Role)
            .createQueryBuilder('role')
            .where('role.id in (:...roles)', { roles })
            .andWhere((qb) => {
            const subQuery = qb
                .subQuery()
                .select(`
          case 
			      when "user_roles"."role_id" > 0 then "user_roles"."role_id"
		        else 0
	        end
          `)
                .from(entities_1.User, 'user')
                .leftJoin('user.roles', 'roles')
                .where('user.id = :id', { id: userId })
                .getQuery();
            return 'role.id not in ' + subQuery;
        });
        return await list.getMany();
    }
    async getAllRolesByIds(roles) {
        const list = this.dataSource
            .getRepository(entities_1.Role)
            .createQueryBuilder('role')
            .where('role.id in (:...roles)', { roles });
        return await list.getMany();
    }
};
exports.AsignarRolesService = AsignarRolesService;
exports.AsignarRolesService = AsignarRolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AsignarRolesService);
//# sourceMappingURL=asignar-roles.service.js.map