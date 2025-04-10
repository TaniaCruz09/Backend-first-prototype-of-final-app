"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const guards_1 = require("../guards");
const role_decorator_1 = require("./role.decorator");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, role_decorator_1.Role)(...roles), (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), guards_1.UserRoleGuard));
}
//# sourceMappingURL=auth.decorator.js.map