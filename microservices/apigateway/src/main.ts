import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';

dotenv.config();
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT) || 3000);
}

bootstrap();
