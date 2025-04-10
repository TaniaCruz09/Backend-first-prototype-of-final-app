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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("./users.service");
let AuthService = class AuthService {
    constructor(usersServices, jwtService) {
        this.usersServices = usersServices;
        this.jwtService = jwtService;
    }
    async signIn(payload) {
        try {
            const { email, password } = payload;
            const user = await this.usersServices.findByEmail(email);
            if (!user) {
                throw new common_1.UnauthorizedException('Usuario no encontrado');
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new common_1.UnauthorizedException('Credenciales inválidas');
            }
            const payloadJwt = { sub: user.id, name: user.name };
            const token = await this.jwtService.signAsync(payloadJwt);
            return { user, token };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map