import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AcademicLevelController, AcademicLevelEntity, AcademicLevelService } from "./academiclevel";



@Module({
  imports: [
    TypeOrmModule.forFeature([AcademicLevelEntity]),
  ],
  controllers: [
    AcademicLevelController
  ],
  providers: [
    AcademicLevelService
    
  ],
  exports: [AcademicLevelModule, TypeOrmModule,],
})
export class AcademicLevelModule {}
