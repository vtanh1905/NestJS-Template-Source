import { Controller, Get } from '@nestjs/common';

@Controller('vehicle')
export class VehicleController {

    @Get('guide')
    getVehicle(): string {
        return "Vehicle Controller"
    }
}
