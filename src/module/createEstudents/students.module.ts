import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentEntity } from "./students.entity";
import { StudentController } from "./students.controller";
import { StudentService } from "./students.service";


@Module({
    imports: [
      TypeOrmModule.forFeature([StudentEntity]),
    ],
    controllers: [
      StudentController
    ],
    providers: [
      StudentService
      
    ],
    exports: [StudetnModule, TypeOrmModule],
  })
  export class StudetnModule {}