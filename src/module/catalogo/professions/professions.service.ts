import { Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProfessionsEntity } from "./professions.entity";
import { ProfessionsDto } from "./professions.dto";

@Injectable()
export class ProfessionsService{
    constructor(
        @InjectRepository(ProfessionsEntity)
        private readonly ProfessionsRepo: Repository<ProfessionsEntity>,
      ) {}

      async created(payload: ProfessionsDto) {
        const profession = await this.ProfessionsRepo.create(payload);
        return await this.ProfessionsRepo.save(profession);
      }

    
      async getProfessions(){
        const profession = await this.ProfessionsRepo.find();
        console.log(profession)
        return profession;
        
      }
      

      async getProfessionsById(id: number): Promise<ProfessionsEntity> {
        const profession = await this.ProfessionsRepo.findOne({
          where: { id },
        });
    
        return profession;
      }

      async updateProfession(id:number, payload:ProfessionsDto ): Promise<ProfessionsEntity>{
        const profession = await this.ProfessionsRepo.preload({id, ...payload });
        return await this.ProfessionsRepo.save(profession)
      }

      async deleteProfession (id:number): Promise<ProfessionsEntity> {
        const profession = await this.ProfessionsRepo.findOne({
          where: {id: id}
        });
        
        return await this.ProfessionsRepo.remove(profession);
      }


}