import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './module/animal/animal.module';
import { VehicleModule } from './module/vehicle/vehicle.module';
import { CatModule } from './module/cat/cat.module';

@Module({
  imports: [AnimalModule, VehicleModule, CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
