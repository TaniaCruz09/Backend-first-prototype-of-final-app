"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
const common_1 = require("@nestjs/common");
class Utilities {
    static catchError(error) {
        if (error.status === 400)
            throw new common_1.BadRequestException(error.message);
        throw new common_1.BadRequestException(error.message);
    }
}
exports.Utilities = Utilities;
//# sourceMappingURL=utilities.js.map