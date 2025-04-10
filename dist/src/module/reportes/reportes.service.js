"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportesService = void 0;
const common_1 = require("@nestjs/common");
let ReportesService = class ReportesService {
    create(createReporteDto) {
        return 'This action adds a new reporte';
    }
    findAll() {
        return `This action returns all reportes`;
    }
    findOne(id) {
        return `This action returns a #${id} reporte`;
    }
    update(id, updateReporteDto) {
        return `This action updates a #${id} reporte`;
    }
    remove(id) {
        return `This action removes a #${id} reporte`;
    }
};
exports.ReportesService = ReportesService;
exports.ReportesService = ReportesService = __decorate([
    (0, common_1.Injectable)()
], ReportesService);
//# sourceMappingURL=reportes.service.js.map