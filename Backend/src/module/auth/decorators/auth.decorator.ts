import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../guards';
import { Role } from './role.decorator';

// export function Auth(...roles: string[]) {
//   console.log(roles);

//   return applyDecorators(
//     RoleProtected(...roles),
//     UseGuards(AuthGuard(), UserRoleGuard),
//   );
// }

export function Auth(...roles: string[]) {
  return applyDecorators(Role(...roles), UseGuards(AuthGuard(), UserRoleGuard));
}
