import {
    Body,
    Controller,
    Get,
    Post,
    Query,

    
} from "@nestjs/common";
import { RolesDto } from "../dto/roles.dto";
import { RolesService } from "../services/roles.service";


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
    /*
    @Get('/')
    async getRoles(@Query() query: RolesDto) {
    const roles = await this.rolesService.getRoles(query);

    const data = {
      data: roles,
      message: 'Ok',
    };

    return data;
  }
  */

}