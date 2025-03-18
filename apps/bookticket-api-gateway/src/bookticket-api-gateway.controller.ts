import { Controller, Get } from '@nestjs/common';
import { BookticketApiGatewayService } from './bookticket-api-gateway.service';

@Controller()
export class BookticketApiGatewayController {
  constructor(private readonly bookticketApiGatewayService: BookticketApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.bookticketApiGatewayService.getHello();
  }
}
