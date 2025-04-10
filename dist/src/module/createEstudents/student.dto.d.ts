import { Departamento, GenderEntity, Municipio, Pais } from "../catalogos";
export declare class StudentsDto {
    readonly id: number;
    readonly name: string;
    readonly lastName: string;
    readonly studentCode: string;
    readonly identityCard: string;
    readonly dateBirt: Date;
    pais: Pais;
    departamento: Departamento;
    municipio: Municipio;
    readonly address: string;
    readonly tutorName: string;
    readonly tutorIdentityCard: string;
    readonly tutorPhoneNumber: string;
    gender: GenderEntity;
    readonly observations: string;
    user_create_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
}
