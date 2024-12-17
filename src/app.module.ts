import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module/database/database.module';
import { CatalogoModule } from './module/catalogo/catalogo.module';
import { DocentesModule } from './module/docentes/docentes.module';
import { StudetnModule } from './module/createEstudents/students.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }), DatabaseModule,  CatalogoModule, DocentesModule,StudetnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

