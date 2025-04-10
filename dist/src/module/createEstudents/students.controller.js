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
exports.StudentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const student_dto_1 = require("./student.dto");
const students_service_1 = require("./students.service");
const utilities_1 = require("../../common/helpers/utilities");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async createStudent(payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: "Usuario no autenticado",
                    statusCode: 401
                };
            }
            payload.user_create_id = userId;
            const newStudent = await this.studentService.created(payload);
            const data = {
                data: newStudent,
                message: 'Estudiante agregado correctamente',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getStudent() {
        try {
            const student = await this.studentService.getStudent();
            const data = {
                data: student,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async getStudentById(id) {
        try {
            const student = await this.studentService.getStudentById(id);
            const data = {
                data: student,
                message: 'ok',
            };
            return data;
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async updateStudent(id, payload, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: "Usuario no autenticado",
                    statusCode: 401
                };
            }
            payload.user_update_id = userId;
            const student = await this.studentService.updateStudent(id, payload);
            return {
                data: student,
                message: 'Estudiante actualizado correctamente',
            };
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
    async deleteStudent(id, req) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return {
                    message: "Usuario no autenticado",
                    statusCode: 401
                };
            }
            const student = await this.studentService.deleteStudent(id, userId);
            return {
                data: student,
                message: 'Profession marked as deleted',
            };
        }
        catch (error) {
            utilities_1.Utilities.catchError(error);
        }
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Post)('/'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentsDto, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudent", null);
__decorate([
    (0, common_1.Get)('/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, student_dto_1.StudentsDto, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
exports.StudentController = StudentController = __decorate([
    (0, swagger_1.ApiTags)('Estudiantes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('student'),
    __metadata("design:paramtypes", [students_service_1.StudentService])
], StudentController);
//# sourceMappingURL=students.controller.js.map