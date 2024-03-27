import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { typeOrmConfig } from '../database';
import { PersonsModule } from './shared/person/person.module';
import { TeamsModule } from './shared/team/team.module';
import { AdminsModule } from './shared/admin/admin.module';
import { AdminsAccessController } from './roles/admin/adminAccess.controller';
import { CoachesAccessController } from './roles/coach/coachAccess.controller';
import { JudgesAccessController } from './roles/judge/judgeAccess.controller';
import { UnauthorizedAccessController } from './roles/unauthorized/unauthorizedAccess.controller';
import { UsersAccessController } from './roles/user/userAccess.controller';
import { CoachesModule } from './shared/coach/coach.module';
import { UsersModule } from './shared/user/user.module';
import { JudgesModule } from './shared/judge/judge.module';
import { AdminsAccessService } from './roles/admin/adminAccess.service';
import { CoachesAccessService } from './roles/coach/coachAccess.service';
import { JudgesAccessService } from './roles/judge/judgeAccess.service';
import { UnauthorizedAccessService } from './roles/unauthorized/unauthorizedAccess.service';
import { UsersAccessService } from './roles/user/userAccess.service';
import { JwtModule } from '@nestjs/jwt';
import { ChampionshipsGroupedModule } from './grouped championship/championship.module';
import { DisciplinesModule } from './shared/discipline/discipline.module';
import { ImageModule } from './shared/image/image.module';


@Module({
  controllers: [
    AdminsAccessController,
    CoachesAccessController,
    JudgesAccessController,
    UnauthorizedAccessController,
    UsersAccessController,
  ],
  providers: [
    AdminsAccessService,
    CoachesAccessService,
    JudgesAccessService,
    UnauthorizedAccessService,
    UsersAccessService,
  ],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    typeOrmConfig(),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: {
        expiresIn: '24h',
      }
    }),
    AdminsModule,
    CoachesModule,
    UsersModule,
    JudgesModule,
    PersonsModule,
    TeamsModule,
    DisciplinesModule,
    ChampionshipsGroupedModule,
    ImageModule,
  ],
})
export class AppModule {}
