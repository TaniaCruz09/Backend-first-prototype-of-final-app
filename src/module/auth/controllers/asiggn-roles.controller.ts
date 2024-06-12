import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Auth } from '../decorators';
import { AsiggnRolesService } from '../services/asiggn-roles.service';
import { UserHasRolesDto } from '../dto/user-has-roles.dto';

@Controller('asignar-roles')
@Auth()
export class AsignarRolesController {
  constructor(private readonly asignarRolesRepo: AsiggnRolesService) {}

  @Post('/:userId')
  @Auth('Admin')
  async asignarRol(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UserHasRolesDto,
  ) {
    const data = await this.asignarRolesRepo.asiggnRol(userId, payload);

    return data;
  }

  @Post('/remover/:userId')
  @Auth('Admin')
  async removerRol(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UserHasRolesDto,
  ) {
    const data = await this.asignarRolesRepo.removerRol(userId, payload);
    return data;
  }
}

