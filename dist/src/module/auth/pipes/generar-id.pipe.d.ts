import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { UserService } from '../services';
export declare class GenerarIdPipe implements PipeTransform {
    private readonly usersServices;
    constructor(usersServices: UserService);
    transform(value: any, metadata: ArgumentMetadata): any;
}
