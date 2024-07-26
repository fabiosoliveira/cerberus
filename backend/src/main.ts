/* istanbul ignore file */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Config from './config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: Config.CORS_ORIGIN,
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(Config.PORT, () =>
    console.log(`App listening on port ${Config.PORT}`),
  );
}
bootstrap();
