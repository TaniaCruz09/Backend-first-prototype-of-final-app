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
exports.StudentService = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const students_entity_1 = require("./students.entity");
const utilities_1 = require("../../common/helpers/utilities");
let StudentService = class StudentService {
    constructor(StudentRepo) {
        this.StudentRepo = StudentRepo;
    }
    async created(payload) {
        try {
            const student = await this.StudentRepo.create(payload);
            return await this.StudentRepo.save(student);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getStudent() {
        try {
            return await this.StudentRepo.find({
                relations: ['pais', 'gender', 'departamento', 'municipio']
            });
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getStudentById(id) {
        try {
            const student = await this.StudentRepo.findOne({
                where: { id },
                relations: ['pais', 'gender', 'departamento', 'municipio']
            });
            return student;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateStudent(id, payload) {
        try {
            const student = await this.StudentRepo.findOne({ where: { id } });
            if (!student) {
                throw new common_1.NotFoundException("Profesión no encontrada");
            }
            Object.assign(student, payload);
            student.update_at = new Date();
            student.user_update_id;
            return await this.StudentRepo.save(student);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteStudent(id, userId) {
        try {
            const student = await this.StudentRepo.findOne({
                where: { id }
            });
            if (!student) {
                throw new common_1.NotFoundException("Profesión no encontrada");
            }
            student.deleted_at = new Date();
            student.deleted_at_id = userId;
            return await this.StudentRepo.save(student);
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(students_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StudentService);
//# sourceMappingURL=students.service.js.map