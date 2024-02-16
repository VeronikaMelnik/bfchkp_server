import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { typeOrmConfig } from '../database';
import { AdminsModule } from './roles/admin/admin.module';
import { CoachesModule } from './roles/coach/coach.module';
import { UsersModule } from './roles/user/user.module';
import { JudgesModule } from './roles/judge/judge.module';


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    typeOrmConfig(),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    AdminsModule,
    CoachesModule,
    UsersModule,
    JudgesModule,
  ],
})
export class AppModule {}
