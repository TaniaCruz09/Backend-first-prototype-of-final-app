import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";
import { GenderDto, GenderEntity, Pais } from "../catalogo";


export class StudentsDto {
    @IsOptional()
    @IsNumber()
    readonly id: number;

    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly lastName: string;

    @IsOptional()
    @IsString()
    readonly studentCode: string;
    
    @IsNotEmpty()
    @IsObject()
    pais: Pais;

    @IsNotEmpty()
    @IsObject()
    gender: GenderEntity;
 

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