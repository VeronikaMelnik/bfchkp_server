import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Comp } from './comp.entity';

@Entity('discips')
export class Discip extends BaseEntity {
  @Column({
    unique: true,
  })
  type: string;

  @ManyToMany(() => Comp, (comp) => comp.discips)
  comps: Comp[];
}
