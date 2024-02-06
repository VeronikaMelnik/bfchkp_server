import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Member } from './entities/member.entity';
import { User } from './entities/user.entity';
import { Coach } from './entities/coach.entity';
import { Team } from './entities/team.entity';
import { Admin } from './entities/admin.entity';
import { Judge } from './entities/judge.entity';
import { Championship } from './entities/championship.entity';
import { Championship_Judge } from './entities/championship-judge.entity';
import { Discipline } from './entities/discipline.entity';
import { Championship_Discipline } from './entities/championship-discipline.entity';
import { Result } from './entities/result.entity';
import { Title } from './entities/title.entity';
import { Prize } from './entities/prize.entity';

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
