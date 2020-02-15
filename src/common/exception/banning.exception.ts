import { HttpException, HttpStatus } from '@nestjs/common'

export class BanndingException extends HttpException {
  constructor() {
    super('Cấm truy cập', HttpStatus.FORBIDDEN);
  }
}