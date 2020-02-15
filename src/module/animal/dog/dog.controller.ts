import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

import { BanndingException } from '../../../common/exception/banning.exception'

@Controller('animal/dog')
export class DogController {

  @Get()
  say(): string {
    return 'Dog Controller'
  }

  @Get('cat')
  testFilter(): string {
    throw new HttpException('Cam Truy cap', 403)

    // throw new HttpException({
    //   error: 'Cấm truy cập',
    //   messageCode: HttpStatus.FORBIDDEN,
    // }, 403)

    // throw new BanndingException();

    return 'Cat Controller'
  }
}
