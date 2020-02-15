import { Controller, Get } from '@nestjs/common';

@Controller('animal')
export class AnimalController {

    @Get()
    animal(): String {
        return "Controller Animal";
    }
}
