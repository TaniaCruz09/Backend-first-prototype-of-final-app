import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthDto } from '../dtos/auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(@Body() payload: AuthDto) {
    return await this.authService.signIn(payload);
  }

  @Get('test')
  @UseGuards(AuthGuard())
  test() {
    return 'test';
  }
}
