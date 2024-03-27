import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Person } from './person.entity';
import { Team } from './team.entity';

@Entity('coaches')
export class Coach extends BaseEntity {
  @Column({
    default: 0,
  })
  experience: number;

  @OneToOne(() => Person, (person) => person.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'personId',
  })
  person: Person;
  @Column()
  personId: number;

  @ManyToOne(() => Team, (team) => team.id)
  @JoinColumn({
    name: 'teamId',
  })
  team: Team;
  @Column()
  teamId: number;
}
