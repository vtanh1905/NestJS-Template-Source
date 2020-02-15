import { Controller, Get, Query } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cat')
export class CatController {

  @Get()
  getNameCat(@Query() query: CreateCatDto): string {
    console.log(query);

    return 'Kem Map';
  }
}
