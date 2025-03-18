import { NestFactory } from '@nestjs/core';
import { BookticketApiGatewayModule } from './bookticket-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookticketApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
