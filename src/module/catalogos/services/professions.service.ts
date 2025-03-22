import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionsDto } from '../dtos/professions.dto';
import { ProfessionsEntity } from '../entities/professions.entity';
import { Utilities } from 'src/common/helpers/utilities';

@Injectable()
export class ProfessionsService {
  constructor(
    @InjectRepository(ProfessionsEntity)
    private readonly ProfessionsRepo: Repository<ProfessionsEntity>,
  ) {}

  async created(payload: ProfessionsDto) {
    try {
      const profession = await this.ProfessionsRepo.create(payload);
      return await this.ProfessionsRepo.save(profession);
    } catch (error) {
      Utilities.catchError(error);
    }
  }

<<<<<<< HEAD
    
      async getProfessions(): Promise<ProfessionsEntity[]>{
        try{
          const profession = await this.ProfessionsRepo.find();
          return profession;
        }catch(error){
          Utilities.catchError(error)
        }
        
      }
      
=======
  async getProfessions() {
    try {
      const profession = await this.ProfessionsRepo.find();
      return profession;
    } catch (error) {
      Utilities.catchError(error);
    }
  }
>>>>>>> 2d3fe51b1e0083e5c3be45878aa01b7d6af780f2

  async getProfessionsById(id: number): Promise<ProfessionsEntity> {
    try {
      const profession = await this.ProfessionsRepo.findOne({
        where: { id },
      });

      return profession;
    } catch (error) {
      Utilities.catchError(error);
    }
  }

  /*async updateProfession(id: number, updateprofesionDTO: Partial<ProfessionsEntity>): Promise<ProfessionsEntity> {
              try {
                  const profesion = await this.ProfessionsRepo.preload({
                      id,
                      ...updateprofesionDTO,
                  });
                  return await this.ProfessionsRepo.save(profesion);
              } catch (error) {
                  Utilities.catchError (error)
              }
    }*/
  /* async updateProfession(id: number, updateprofesionDTO: Partial<ProfessionsEntity>): Promise<ProfessionsEntity> {
                try {
                    const profesion = await this.ProfessionsRepo.preload({
                        id,
                        ...updateprofesionDTO,
                    });
            
                    if (!profesion) {
                        throw new NotFoundException("Profesión no encontrada");
                    }
            
                    return await this.ProfessionsRepo.save(profesion);
                } catch (error) {
                    Utilities.catchError(error);
                }
            }*/

  async updateProfession(
    id: number,
    payload: ProfessionsDto,
  ): Promise<ProfessionsEntity> {
    try {
      const profession = await this.ProfessionsRepo.findOne({ where: { id } });

      if (!profession) {
        throw new NotFoundException('Profesión no encontrada');
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

  /* async deleteProfession (id:number): Promise<ProfessionsEntity> {
        try{

          const profession = await this.ProfessionsRepo.findOne({
            where: {id: id}
          });
          
          return await this.ProfessionsRepo.remove(profession);
        }catch(error){
          Utilities.catchError(error)
        }
      }*/

  async deleteProfession(
    id: number,
    userId: number,
  ): Promise<ProfessionsEntity> {
    try {
      const profession = await this.ProfessionsRepo.findOne({ where: { id } });

      if (!profession) {
        throw new NotFoundException('Profesión no encontrada');
      }

      // Registrar el usuario que eliminó y la fecha de eliminación
      profession.deleted_at = new Date();
      profession.deleted_at_id = userId;

      return await this.ProfessionsRepo.save(profession); // Guardar los cambios
    } catch (error) {
      Utilities.catchError(error);
    }
  }
}
