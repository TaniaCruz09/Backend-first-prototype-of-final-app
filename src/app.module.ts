import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module/database/database.module';
import { CatalogoModule } from './module/catalogo/catalogo.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }), DatabaseModule,  CatalogoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

