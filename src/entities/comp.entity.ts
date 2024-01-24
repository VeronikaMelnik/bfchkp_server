import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Discip } from './discip.entity';
import { Result } from './result.entity';

@Entity('comps')
export class Comp extends BaseEntity {
  @Column()
  name: string;

  @Column()
  date: string;

  @ManyToMany(() => Discip, (discip) => discip.comps)
  discips: Discip[];

  @OneToMany(() => Result, (result) => result.comps)
  results: Result[];
}
