import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Comp } from './comp.entity';

@Entity('results')
export class Result extends BaseEntity {
  @Column()
  place: number;

  @ManyToOne(() => User, (user) => user.results)
  @JoinColumn({ name: 'userId' })
  users: User;
  @Column()
  userId: number;

  @ManyToOne(() => Comp, (comp) => comp.results)
  @JoinColumn({ name: 'compId' })
  comps: Comp;
  @Column()
  compId: number;
}
