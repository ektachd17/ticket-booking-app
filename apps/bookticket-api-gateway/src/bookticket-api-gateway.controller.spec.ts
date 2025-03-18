import { Test, TestingModule } from '@nestjs/testing';
import { BookticketApiGatewayController } from './bookticket-api-gateway.controller';
import { BookticketApiGatewayService } from './bookticket-api-gateway.service';

describe('BookticketApiGatewayController', () => {
  let bookticketApiGatewayController: BookticketApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookticketApiGatewayController],
      providers: [BookticketApiGatewayService],
    }).compile();

    bookticketApiGatewayController = app.get<BookticketApiGatewayController>(BookticketApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookticketApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
