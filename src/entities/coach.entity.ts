import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
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
  @Column({
    nullable: true,
  })
  humanId: number;

  @ManyToOne(() => Team, (team) => team.id)
  @JoinColumn({
    name: 'teamId',
  })
  team: Team;
  @Column({
    nullable: true,
  })
  teamId: number;
}
