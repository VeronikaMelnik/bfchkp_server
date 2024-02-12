import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Championship } from '../championship/championship.entity';
import { Judge } from '../judge/judge.entity';

@Entity('championships-judges')
export class Championship_Judge extends BaseEntity {
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
