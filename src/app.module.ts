import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { typeOrmConfig } from '.';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { TeamsModule } from './team/team.module';
import { CoachesModule } from './coach/coach.module';
import { ChampionshipsModule } from './championship/championship.module';
import { DisciplinesModule } from './discipline/discipline.module';
import { TitlesModule } from './title/title.module';
import { ResultsModule } from './result/result.module';
import { PrizesModule } from './prize/prize.module';
import { AdminsModule } from './admin/admin.module';
import { Championships_DisciplinesModule } from './championship-discipline/championship-discipline.module';
import { Championships_JudgesModule } from './championship-judge/championship-judge.module';
import { JudgesModule } from './judge/judge.module';
import { MembersModule } from './member/member.module';
import { PersonsModule } from './person/person.module';

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
    AuthModule,
    UsersModule,
    TeamsModule,
    // CoachesModule,
    // ChampionshipsModule,
    DisciplinesModule,
    // TitlesModule,
    // ResultsModule,
    // PrizesModule,
    // AdminsModule,
    // Championships_DisciplinesModule,
    // Championships_JudgesModule,
    // JudgesModule,
    // MembersModule,
    // PersonsModule,
  ],
})
export class AppModule {}
