import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Championship } from './championship.entity';
import { Judge } from './judge.entity';

@Entity('championshipsJudges')
export class ChampionshipJudge extends BaseEntity {
  @ManyToOne(() => Championship, (championship) => championship.id)
  @JoinColumn({
    name: 'championshipId',
  })
  championship: Championship;
  @Column()
  championshipId: number;

  @ManyToOne(() => Judge, (judge) => judge.id)
  @JoinColumn({
    name: 'judgeId',
  })
  judge: Judge;
  @Column()
  judgeId: number;
}
