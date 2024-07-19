import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AcademicLevelEntity } from "./academiclevel.entity";
import { AcademicLevelController } from "./academiclevel.controller";
import { AcademicLevelService } from "./academiclevel.service";


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
