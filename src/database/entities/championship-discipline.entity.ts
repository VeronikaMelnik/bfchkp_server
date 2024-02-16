import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Championship } from './championship.entity';
import { Discipline } from './discipline.entity';

@Entity('championships-disciplines')
export class Championship_Discipline extends BaseEntity {
  @ManyToOne(() => Championship, (championship) => championship.id)
  @JoinColumn({
    name: 'championshipId',
  })
  championship: Championship;
  @Column()
  championshipId: number;

  @ManyToOne(() => Discipline, (discipline) => discipline.id)
  @JoinColumn({
    name: 'disciplineId',
  })
  discipline: Discipline;
  @Column()
  disciplineId: number;
}
