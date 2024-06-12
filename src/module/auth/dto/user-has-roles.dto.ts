import { IsArray, IsNotEmpty, IsNumber } from "class-validator";


export class UserHasRolesDto{
    @IsNotEmpty()
    @IsNumber()
    user_id: number

    @IsNotEmpty()
    @IsNumber({}, {each:true})
    @IsArray()
    roles: number[];
}