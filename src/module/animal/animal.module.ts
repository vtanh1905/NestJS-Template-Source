import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { DogModule } from './dog/dog.module';

import { LoggerMiddleware } from '../../middlewares/logger.middle'

@Module({
  providers: [AnimalService],
  controllers: [AnimalController],
  exports: [AnimalService],
  imports: [DogModule],

})
export class AnimalModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('animal/dog')
      .forRoutes(AnimalController);
  }
}
