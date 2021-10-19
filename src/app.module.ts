import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CarsfleetModule } from './carsfleet/carsfleet.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    CarsfleetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
