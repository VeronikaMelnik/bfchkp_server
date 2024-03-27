import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app.module';

async function start() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const configService: ConfigService = app.get(ConfigService);

  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_STORAGE_PROJECT_ID'),
    privateKey: (
      configService.get<string>('FIREBASE_STORAGE_PRIVATE_KEY') || ''
    ).replace(/\\\\n/g, '\\n'),
    clientEmail: configService.get<string>('FIREBASE_STORAGE_CLIENT_EMAIL'),
  };
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    storageBucket: configService.get<string>('FIREBASE_STORAGE_BUCKET'),
  });

  const PORT = configService.get<number>('PORT') || 5000;

  const swaggerConfig = new DocumentBuilder()
    .setTitle('BFCHKP')
    .addBearerAuth({
      type: 'http',
    })
    .setDescription(
      'Web-application of the organization «Belarusian Federation of Cheerleading and Support Teams» was created as an assistant in search of information about competitions, coaches, disciplines and other parts of the federation',
      )
      .setVersion('1.0')
      .addTag('Competitions')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () =>
    Logger.log(`Server started on port = ${PORT}`, 'NestServer'),
  );
}
start();
