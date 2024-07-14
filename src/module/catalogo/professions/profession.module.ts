import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfessionsEntity } from "./professions.entity";
import { ProfessionsController } from "./professions.controller";
import { ProfessionsService } from "./professions.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([ProfessionsEntity]),
  ],
  controllers: [
    ProfessionsController
  ],
  providers: [
    ProfessionsService
    
  ],
  exports: [ProfessionsModule, TypeOrmModule,],
})
export class ProfessionsModule {}
