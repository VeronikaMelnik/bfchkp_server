import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Admin,
  Coach,
  Judge,
  Team,
  User,
  Championship,
  ChampionshipDiscipline,
  ChampionshipJudge,
  Result,
  Discipline,
  Person,
  Member,
  Prize,
  Title,
  Dictionary,
  News,
  ImageEntity
} from './entities';
import * as Migrations from './migrations';

export const typeOrmConfig = () => {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    url: process.env.POSTGRES_URL,
    logging: false,
    synchronize: true,
    ssl: !!process.env.POSTGRES_SSL || undefined,
    entities: [
      Admin,
      Coach,
      User,
      Judge,
      Team,
      Championship,
      ChampionshipDiscipline,
      ChampionshipJudge,
      Result,
      Discipline,
      Person,
      Member,
      Prize,
      Title,
      ImageEntity,
      Dictionary,
      News,
    ],
    migrations: Object.values(Migrations),
    migrationsRun: true,
  });
};
