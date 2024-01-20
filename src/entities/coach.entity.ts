import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Human } from './human.entity';
import { Team } from './team.entity';

@Entity('coaches')
export class Coach extends BaseEntity {
  @Column({
    nullable: true,
  })
  experience: number;

  @OneToOne(() => Human, (human) => human.id)
  @JoinColumn({
    name: 'humanId',
  })
  human: Human;
  @Column()
  humanId: number;

  @OneToOne(() => Team, (team) => team.id)
  @JoinColumn({
    name: 'teamId',
  })
  team: Team;
  @Column()
  teamId: number;
}
