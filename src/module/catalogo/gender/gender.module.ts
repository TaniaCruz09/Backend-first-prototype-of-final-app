import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GenderEntity } from "./gender.entity";
import { GenderController } from "./gender.controller";
import { GenderService } from "./gender.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([GenderEntity]),
  ],
  controllers: [
    GenderController
  ],
  providers: [
    GenderService
    
  ],
  exports: [GenderModule, TypeOrmModule,],
})
export class GenderModule {}
