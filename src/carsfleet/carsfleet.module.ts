import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";
import { CarsModule } from './cars/cars.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>("mongodb_connector_url"),
        dbName: "carsfleet"
      }),
      inject: [ConfigService]
    }),
    CarsModule,
    DriversModule
  ],
})
export class CarsfleetModule {}
