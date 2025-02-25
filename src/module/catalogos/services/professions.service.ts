import { Injectable, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProfessionsDto } from "../dtos/professions.dto";
import { ProfessionsEntity } from "../entities/professions.entity";
import { Utilities } from "src/common/helpers/utilities";

@Injectable()
export class ProfessionsService{
    constructor(
        @InjectRepository(ProfessionsEntity)
        private readonly ProfessionsRepo: Repository<ProfessionsEntity>,
      ) {}

      async created(payload: ProfessionsDto) {
        try{
          const profession = await this.ProfessionsRepo.create(payload);
          return await this.ProfessionsRepo.save(profession);
        }catch(error){
          Utilities.catchError(error)
        }
      }

    
      async getProfessions(){
        try{
          const profession = await this.ProfessionsRepo.find();
          console.log(profession)
          return profession;
        }catch(error){
          Utilities.catchError(error)
        }
        
      }
      

      async getProfessionsById(id: number): Promise<ProfessionsEntity> {
        try{
          const profession = await this.ProfessionsRepo.findOne({
            where: { id },
          });
      
          return profession;
        }catch(error){
          Utilities.catchError(error)
        }
      }

      async updateProfession(id: number, payload: ProfessionsDto): Promise<ProfessionsEntity> {
        try {
            const profession = await this.ProfessionsRepo.findOne({ where: { id } });
    
            if (!profession) {
                throw new NotFoundException("Profesión no encontrada");
            }
    
            // Actualizar solo los campos enviados, conservando los valores previos
            Object.assign(profession, payload);
    
            // Asignar la fecha de actualización y el usuario que modifica
            profession.update_at = new Date();
            profession.user_update_id;
    
            return await this.ProfessionsRepo.save(profession);
        } catch (error) {
            Utilities.catchError(error);
        }
    }
    
      async deleteProfession (id:number): Promise<ProfessionsEntity> {
        try{

          const profession = await this.ProfessionsRepo.findOne({
            where: {id: id}
          });
          
          return await this.ProfessionsRepo.remove(profession);
        }catch(error){
          Utilities.catchError(error)
        }
      }

}