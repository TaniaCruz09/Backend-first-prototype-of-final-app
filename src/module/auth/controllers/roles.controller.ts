import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UseGuards,

    
} from "@nestjs/common";
import { RolesDto } from "../dto/roles.dto";
import { RolesService } from "../services/roles.service";
import { AuthGuard } from "@nestjs/passport";


@Controller('roles')

export class RolesController{
    constructor(private readonly rolesService: RolesService){}

    @Post('/')
    async createdRoles(@Body() payload: RolesDto) {
      const newRole = await this.rolesService.created(payload);
      const data = {
        data: newRole,
        message: 'created',
      };
      return data;
    }
   
    @Get('/')
    async getRoles() {
    const roles = await this.rolesService.getRoles();
    const data = {
      data: roles,
      message: 'Ok',
    };

    return data;
  }
  

  @Get('/:id')
  async getRolesById(@Param('id', ParseIntPipe) id: number) {
    const roles = await this.rolesService.getRolesById(id);

    const data = {
      data: roles,
      message: 'Ok',
    };

    return data;
  }

  @Put('/:id')
  async updateRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: RolesDto,
  ) {
    const roles = await this.rolesService.updateRole(id, payload);

    const data = {
      data: roles,
    };

    return data;
  }

  @Delete('/:id')
  async deleteRole(@Param('id', ParseIntPipe) id: number) {
    const roles = await this.rolesService.deleteRoles(id);

    const data = {
      data: roles,
      message: 'Role deleted',
    };

    return data;
  }



}