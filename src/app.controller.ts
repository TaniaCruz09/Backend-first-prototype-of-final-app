import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly config: ConfigService,
    private readonly appService: AppService,
  ) {}

  @Get('/')
  getHello() {
    const data = {
      data: this.config.get('API_KEY'),
    };
    return data;
  }

  @Get('/sin-guard')
  getSinGuard() {
    return 'endpoint sin guard';
  }
}
