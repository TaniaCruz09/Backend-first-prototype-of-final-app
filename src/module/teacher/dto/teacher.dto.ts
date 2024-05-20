import { IsEmail, IsNotEmpty, IsString } from "class-validator"



export class TeacherDto{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    email: string


}