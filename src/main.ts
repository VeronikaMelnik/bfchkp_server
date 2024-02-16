import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
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

  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
