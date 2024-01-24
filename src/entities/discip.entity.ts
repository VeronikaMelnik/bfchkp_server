import { Column, Entity, JoinColumn, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Comp } from './comp.entity';

@Entity('discips')
export class Discip extends BaseEntity {
  @Column({
    unique: true,
  })
  type: string;

  @ManyToMany(() => Comp, (comp) => comp.discips)
  @JoinColumn({
    name: 'compId',
  })
  comps: Comp;
  @Column({
    nullable: true,
  })
  compId: number;
}
