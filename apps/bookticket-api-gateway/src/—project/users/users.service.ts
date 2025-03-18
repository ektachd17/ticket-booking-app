import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  findAll() {
    return 'mock findAll response';
  }
}
