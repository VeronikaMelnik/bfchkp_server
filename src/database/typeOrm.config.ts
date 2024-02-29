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
} from './entities';


export const typeOrmConfig = () => {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'dpg-cnfqvf021fec73f8sls0-a',
    port: 5432,
    username: 'veronika',
    password: 'XuQ0lLepEaxZYudbbYMEWtETr4RUcPIy',
    database: 'bfchkp_wwbq',
    url: 'postgres://veronika:XuQ0lLepEaxZYudbbYMEWtETr4RUcPIy@dpg-cnfqvf021fec73f8sls0-a.frankfurt-postgres.render.com/bfchkp_wwbq',
    logging: false,
    synchronize: true,
    ssl: true,
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
    ],
  });
};
