import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Team } from './team.entity';
import { Result } from './result.entity';
import { Title } from './title.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    default: false,
  })
  isAdmin: boolean;

  @OneToOne(() => Team, (team) => team.id)
  @JoinColumn({
    name: 'teamId',
  })
  team: Team;
  @Column()
  teamId: number;

  @OneToMany(() => Result, (result) => result.users)
  results: Result[];

  @OneToMany(() => Title, (title) => title.users)
  titles: Result[];
}
