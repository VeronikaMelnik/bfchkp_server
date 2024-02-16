import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Admin,
  Coach,
  Judge,
  Team,
  User,
  Championship,
  Championship_Discipline,
  Championship_Judge,
  Result,
  Discipline,
  Person,
  Member,
  Prize,
  Title,
} from './entities';


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
      Admin,
      Coach,
      User,
      Judge,
      Team,
      Championship,
      Championship_Discipline,
      Championship_Judge,
      Result,
      Discipline,
      Person,
      Member,
      Prize,
      Title,
    ],
  });
};
