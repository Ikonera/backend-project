import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init()
  const appConfig: ConfigService = app.get(ConfigService);
  const port = appConfig.get<number>("port");
  await app.listen(port);
}

try {
	bootstrap();
}
catch (e) {
	console.log("Error when the app launch : ", e)
}
