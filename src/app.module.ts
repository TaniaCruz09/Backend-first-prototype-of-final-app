import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtniaModule } from './module/catalogo/etnia/etnia.module';
import { DatabaseModule } from './module/database/database.module';
import { SecccioModule } from './module/catalogo/modalidad/modalidad.module';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }), DatabaseModule, EtniaModule, SecccioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

