import { Departamento, Municipio } from "../../catalogos";
export declare class CreateCentroDto {
    readonly id: number;
    nombreCentro: string;
    codigoEstablecimiento: string;
    codigoCentro: string;
    direccionCentro: string;
    departamento: Departamento;
    municipio: Municipio;
    user_created_id: number;
    created_at: Date;
    update_at: Date;
    user_update_id: number;
    deleted_at: Date;
    deleted_at_id: number;
}
