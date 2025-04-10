"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCalificacioneDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_calificacione_dto_1 = require("./create-calificacione.dto");
class UpdateCalificacioneDto extends (0, swagger_1.PartialType)(create_calificacione_dto_1.CreateCalificacionDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCalificacioneDto = UpdateCalificacioneDto;
//# sourceMappingURL=update-calificacione.dto.js.map