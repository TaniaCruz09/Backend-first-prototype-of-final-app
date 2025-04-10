import { Role } from "./roles.entity";
import { AcademicLevelEntity, GenderEntity, ProfessionsEntity } from "src/module/catalogos";
import { StudentEntity } from "src/module/createEstudents";
import { SemestreEntity } from "src/module/catalogos/entities/semestres.entity";
export declare class User {
    id?: number;
    name: string;
    email: string;
    password: string;
    token: string;
    professions: ProfessionsEntity;
    academicLevel: AcademicLevelEntity;
    gender: GenderEntity;
    student: StudentEntity;
    sementre: SemestreEntity;
    roles: Role[];
    isActive: boolean;
}
