import { IsNotEmpty, IsObject } from "class-validator";
import { Pais } from "../catalogo";

export class StudentsDto {

    readonly name: string;

    readonly lastName: string;

    readonly studentCode: string;
    
    @IsNotEmpty()
    @IsObject()
    readonly nationality: Pais;

    /*readonly identityCard: string;

    readonly dateBirt : string;


    readonly department: string;

    readonly municipality : string;

    readonly address:  string;

    readonly tutorName: string;

    readonly tutorIdentityCard: string;

    readonly tutorPhoneNumber: string;
*/
   

}