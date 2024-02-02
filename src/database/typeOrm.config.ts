import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.model';
import { Person } from './entities/person.entity';
import { Member } from './entities/member.entity';
import { Coach } from 'src/coaches/coaches.model';
import { Team } from 'src/teams/teams.model';

export const typeOrmConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  logging: false,
  synchronize: true,
  entities: [Person, User, Member, Coach, Team],
});
