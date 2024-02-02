import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Comp } from './comp.entity';

@Entity('discips')
export class Discip extends BaseEntity {
  @Column({
    unique: true,
  })
  type: string;

  @ManyToMany(() => Comp, (comp) => comp.discips)
  @JoinTable()
  comps: Comp[];
  @Column({
    nullable: true,
  })
  compId: number;
}
