import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SemestreDto } from "../dtos/semestres.dto";
import { Repository } from "typeorm";
import { SemestreEntity } from "../entities/semestres.entity";
import { Utilities } from "src/common/helpers/utilities";


@Injectable()
export class SemestreService {
    constructor(
        @InjectRepository(SemestreEntity)
        private readonly SemestreRepo: Repository<SemestreEntity>,
    ) { }
    async created(payload: SemestreDto) {
        try {
            const semestre = await this.SemestreRepo.create(payload);
            return await this.SemestreRepo.save(semestre);
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    async getSemestres(): Promise<SemestreEntity[]> {
        try {
            const semestre = await this.SemestreRepo.find();
            return semestre;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    async getSemestreById(id: number): Promise<SemestreEntity> {
        try {
            const semestre = await this.SemestreRepo.findOne({ where: { id } })
            return semestre;
        } catch (error) {
            Utilities.catchError(error)
        }
    }

    async updateSemestre(id: number, payload: SemestreDto): Promise<SemestreEntity> {
        try {
            const semestre = await this.SemestreRepo.findOne({ where: { id } });

            if (!semestre) {
                throw new NotFoundException("semestre no encontrado");
            }

            // Actualizar solo los campos enviados, conservando los valores previos
            Object.assign(semestre, payload);

            // Asignar la fecha de actualización y el usuario que modifica
            semestre.update_at = new Date();
            semestre.user_update_id;

            return await this.SemestreRepo.save(semestre);
        } catch (error) {
            Utilities.catchError(error);
        }
    }

    async deleteSemestre(id: number, userId: number): Promise<SemestreEntity> {
              try {
                  const semestre = await this.SemestreRepo.findOne({ where: { id } });
          
                  if (!semestre) {
                      throw new NotFoundException("semestre no encontrado");
                  }
          
                  // Registrar el usuario que eliminó y la fecha de eliminación
                  semestre.deleted_at = new Date();
                  semestre.deleted_at_id = userId;
          
                  return await this.SemestreRepo.save(semestre); // Guardar los cambios
              } catch (error) {
                  Utilities.catchError(error);
              }
          }

}