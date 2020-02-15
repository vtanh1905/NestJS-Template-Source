import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {
  HttpExceptionFilter,
  ValidationPipe,
  LoggingInterceptor,
  TransformInterceptor,
  TimeoutInterceptor
} from 'src/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalInterceptors(new TimeoutInterceptor())

  await app.listen(3000);
}
bootstrap();
