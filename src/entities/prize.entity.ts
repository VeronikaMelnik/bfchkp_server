import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Result } from './result.entity';

@Entity('prizes')
export class Prize extends BaseEntity {
  @Column()
  name: string;

  @OneToOne(() => Result, (result) => result.id)
  @JoinColumn({
    name: 'resultId',
  })
  result: Result;
  @Column()
  resultId: number;
}
