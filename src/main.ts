import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = Number(process.env.PORT || 5000);
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:3000/', 'http://bfchkp.vercel.app/'],
    },
  });
  await app.listen(PORT, () =>
    process.stdout.write(`Server started on port: ${PORT}\n`),
  );
}
bootstrap();
