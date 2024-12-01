import { SetMetadata } from '@nestjs/common';

export const META_ROLES = 'roles';

export const Role = (...args: string[]) => {
  return SetMetadata(META_ROLES, args);
};
