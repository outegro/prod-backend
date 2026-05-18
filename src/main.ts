import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = Number(process.env.PORT ?? 3000);
  const corsOrigin = (process.env.CORS_ORIGIN ?? 'https://outegro.dev')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  });

  await app.listen(port, '0.0.0.0');
}
bootstrap();
