import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AnimalService } from './module/animal/animal.service';
import { DogService } from './module/animal/dog/dog.service';

import { MyDecorator1, MyDecorator2 } from './common/decorators/template.decorator'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly animalService: AnimalService,
    // private readonly dogService: DogService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('home/animal')
  getAnimal() {
    return {
      name: 'Kem 123'
    }
  }

  @Get('home')
  getNumber() {
    return null
  }

  @Get('/home/cat')
  @MyDecorator2(123)
  testDecorator(): string {
    return 'Test My Decorator';
  }

  // @Get('/home/dog')
  // getDog(): string {
  //   return this.dogService.say();
  // }
}
