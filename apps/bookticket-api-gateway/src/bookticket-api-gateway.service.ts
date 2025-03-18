import { Injectable } from '@nestjs/common';

@Injectable()
export class BookticketApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
