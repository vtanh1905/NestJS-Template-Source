import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';

@Module({
  providers: [DogService],
  exports: [DogService],
  controllers: [DogController]
})
export class DogModule { }
