import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = Number(process.env.PORT || 5000);
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const config = new DocumentBuilder()
    .setTitle('BFCHKP')
    .setDescription(
      'Web-application of the organization «Belarusian Federation of Cheerleading and Support Teams» was created as an assistant in search of information about competitions, coaches, disciplines and other parts of the federation',
    )
    .setVersion('1.0')
    .addTag('Competitions')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(PORT, () =>
    process.stdout.write(`Server started on port: ${PORT}\n`),
  );
}
bootstrap();
