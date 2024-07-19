import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtniaModule } from './module/catalogo/etnia/etnia.module';
import { DatabaseModule } from './module/database/database.module';
import { SeccionModule } from './module/catalogo/seccion/seccion.module';
import { TurnoModule } from './module/catalogo/turnos/turnos.module';
import { ModalidadModule } from './module/catalogo/modalidad/modalidad.module';
import { GradesModule } from './module/catalogo/grades/grades.module';
import { GenderModule } from './module/catalogo/gender/gender.module';
import { ProfessionsModule } from './module/catalogo/professions/profession.module';
import { AcademicLevelModule } from './module/catalogo/academiclevel';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }), DatabaseModule, EtniaModule, GradesModule, SeccionModule, GenderModule, ProfessionsModule, AcademicLevelModule, TurnoModule, ModalidadModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

