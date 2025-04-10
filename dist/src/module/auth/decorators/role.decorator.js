"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.META_ROLES = void 0;
const common_1 = require("@nestjs/common");
exports.META_ROLES = 'roles';
const Role = (...args) => {
    return (0, common_1.SetMetadata)(exports.META_ROLES, args);
};
exports.Role = Role;
//# sourceMappingURL=role.decorator.js.map