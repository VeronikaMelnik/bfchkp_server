import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Team } from '../team/team.entity';
import { Person } from '../person/person.entity';

@Entity('members')
export class Member extends BaseEntity {
  @ManyToOne(() => Team, (team) => team.id)
  @JoinColumn({
    name: 'teamId',
  })
  team: Team;
  @Column()
  teamId: number;

  @OneToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'personId',
  })
  person: Person;
  @Column()
  personId: number;
}
