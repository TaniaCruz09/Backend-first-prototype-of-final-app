import { AcademicLevelEntity, Departamento, GenderEntity, Municipio, Pais, ProfessionsEntity } from '../catalogos';
export declare class DocentesDTO {
    readonly id?: number;
    nombres: string;
    apellido_paterno: string;
    apellido_materno: string;
    cedula_identidad: string;
    sexo: GenderEntity;
    nivel_academico: AcademicLevelEntity[];
    profesion: ProfessionsEntity[];
    telefono: string;
    fecha_nacimiento: Date;
    pais: Pais;
    departamento: Departamento;
    municipio: Municipio;
    direccion_domiciliar: string;
    fechaContratado: Date;
    nombre_contacto_emergencia: string;
    telefono_contacto_emergencia: string;
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
}
