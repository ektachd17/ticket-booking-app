import { Module } from '@nestjs/common';
import { BookticketApiGatewayController } from './bookticket-api-gateway.controller';
import { BookticketApiGatewayService } from './bookticket-api-gateway.service';
import { UsersModule } from './—project/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BookticketApiGatewayController],
  providers: [BookticketApiGatewayService],
})
export class BookticketApiGatewayModule {}
