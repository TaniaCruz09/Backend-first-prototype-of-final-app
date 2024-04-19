import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { UserDto, UserPartialTypeDto } from "../dto/users.dto";

@Controller('users')
export class UserController{
    constructor(private readonly usersServices: UsersService) {}


@Post('/')
  async createUser(@Body() payload: UserDto) {
    return await this.usersServices.created(payload);
  }

  @Get('/')
  async getUsers() {
    const users = await this.usersServices.getUsers();
    const data = {
      data: users,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersServices.getUserById(id);

    const data = {
      data: user,
      message: 'Ok',
    };

    return data;
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
    const user = await this.usersServices.deleted(id);

    const data = {
      data: user,
      message: 'user deleted',
    };

    return data;
  }

}