import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with the origin of your frontend application
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Add the allowed headers
    credentials: true, // Enable credentials (if needed for cookies, authentication, etc.)
  });
  await app.listen(3001);
}
bootstrap();
