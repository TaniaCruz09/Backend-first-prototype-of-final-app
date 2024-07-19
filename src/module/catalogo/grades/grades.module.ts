import { Module } from "@nestjs/common";
import { GradesController } from "./grades.controller";
import { GradesEntity } from "./grades.entity";
import { GradesService } from "./grades.service";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [
    TypeOrmModule.forFeature([GradesEntity]),
  ],
  controllers: [
    GradesController
  ],
  providers: [
    GradesService
    
  ],
  exports: [GradesModule, TypeOrmModule,],
})
export class GradesModule {}
