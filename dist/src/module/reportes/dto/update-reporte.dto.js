"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReporteDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_reporte_dto_1 = require("./create-reporte.dto");
class UpdateReporteDto extends (0, swagger_1.PartialType)(create_reporte_dto_1.CreateReporteDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateReporteDto = UpdateReporteDto;
//# sourceMappingURL=update-reporte.dto.js.map