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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../entities");
const typeorm_2 = require("typeorm");
const enums_1 = require("../enums");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const utilities_1 = require("../../../common/helpers/utilities");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.users = [];
    }
    countItems() {
        return this.users.length;
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                password: true
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('No se encotro el usuario');
        }
        return user;
    }
    async created(payload) {
        try {
            let { password, email, name } = payload;
            password = await bcrypt.hash(password, enums_1.SetupEnum.SALTORROUND);
            const newUser = this.userRepository.create({ name, email, password });
            const savedUser = await this.userRepository.save(newUser);
            const token = await this.jwtService.signAsync({
                sub: savedUser.id,
                name: savedUser.name,
                email: savedUser.email,
            });
            savedUser.token = token;
            await this.userRepository.save(savedUser);
            return { user: savedUser, token };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getUsers() {
        const users = await this.userRepository.find();
        return users;
    }
    async getUserById(id) {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            return user;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updated(id, payload) {
        const oldUser = await this.userRepository.findOne({ where: { id: id } });
        if (!oldUser) {
            throw new common_1.NotFoundException('No se encontro el usuario');
        }
        const merged = this.userRepository.merge(oldUser, payload);
        return await this.userRepository.save(merged);
    }
    async deleted(id) {
        const index = await this.userRepository.findOne({ where: { id } });
        return await this.userRepository.remove(index);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=users.service.js.map