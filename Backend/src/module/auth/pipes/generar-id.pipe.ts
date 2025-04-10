import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { UserService } from '../services';

@Injectable()
export class GenerarIdPipe implements PipeTransform {
  constructor(private readonly usersServices: UserService) {}
  transform(value: any, metadata: ArgumentMetadata) {
    // const email = this.usersServices.existEmail(value.email);
    // if (email) {
    //   throw new BadRequestException('El email ya existe');
    // }
    // value.id = this.usersServices.countItems() + 1;
    return value;
  }
}
