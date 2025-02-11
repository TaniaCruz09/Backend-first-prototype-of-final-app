import { BadRequestException } from "@nestjs/common";
import { catchError } from "rxjs";


export class Utilities {
    static catchError(error: any){
        if (error.status === 400 ) throw new BadRequestException(error.message);

        throw new BadRequestException(error.message);
    }

}