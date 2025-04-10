import { User } from "../../auth/entities";
import { Departamento, Municipio } from "../../catalogos";
export declare class Centro {
    id?: number;
    nombreCentro: string;
    codigoEstablecimiento: string;
    codigoCentro: string;
    direccionCentro: string;
    user: User;
    userUpdate?: User;
    createdAt?: Date;
    updatedAt?: Date;
    departamento: Departamento;
    municipio: Municipio;
}
