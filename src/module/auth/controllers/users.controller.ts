import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { UsersDto, UserPartialTypeDto } from '../dtos/users-dto';
import { AuthGuard } from '@nestjs/passport';
import { Auth, GetUser } from '../decorators';
import { User } from '../entities';
import { UserService } from '../services';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
// @UseGuards(AuthGuard())
export class UsersController {
  constructor(private readonly usersServices: UserService) {}

  @Get('/')
  async getUsers() {
    const users = await this.usersServices.getUsers();
    const data = {
      data: users,
      message: 'ok',
    };
    return data;
  }

  @Post('/')
  async createUser(@Body() payload: UsersDto) {
    return await this.usersServices.created(payload);
  }

  @Get('/:id')
  async getUser(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return await this.usersServices.getUser(id);
  }

  @Put('/:id')
  async updatedUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UserPartialTypeDto,
  ) {
    return await this.usersServices.updated(id, payload);
  }

  @Delete('/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersServices.deleted(id);
  }
}
