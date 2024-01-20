import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Human } from './entities/human.entity';
import { Clerk } from './entities/clerk.entity';
import { Coach } from './entities/coach.entity';
import { Team } from './entities/team.entity';
import { Discip } from './entities/discip.entity';
import { Comp } from './entities/comp.entity';
import { Result } from './entities/result.entity';
import { Prize } from './entities/prize.entity';
import { Title } from './entities/title.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'bfchkp',
      logging: false,
      synchronize: true,
      entities: [
        User,
        Human,
        Clerk,
        Coach,
        Team,
        Discip,
        Comp,
        Result,
        Prize,
        Title,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

// eslint-disable-next-line prettier/prettier
export class AppModule { }
