import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person/person.entity';
import { Member } from './member/member.entity';
import { User } from './user/user.entity';
import { Coach } from './coach/coach.entity';
import { Team } from './team/team.entity';
import { Admin } from './admin/admin.entity';
import { Judge } from './judge/judge.entity';
import { Championship } from './championship/championship.entity';
import { Discipline } from './discipline/discipline.entity';
import { Championship_Discipline } from './championship-discipline/championship-discipline.entity';
import { Result } from './result/result.entity';
import { Title } from './title/title.entity';
import { Prize } from './prize/prize.entity';
import { Championship_Judge } from './championship-judge/championship-judge.entity';

export const typeOrmConfig = () => {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: false,
    synchronize: true,
    entities: [
      Person,
      User,
      Member,
      Coach,
      Team,
      Admin,
      Judge,
      Championship,
      Championship_Judge,
      Discipline,
      Championship_Discipline,
      Result,
      Title,
      Prize,
    ],
  });
};
