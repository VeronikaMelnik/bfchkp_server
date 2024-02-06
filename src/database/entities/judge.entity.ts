import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Person } from './person.entity';

@Entity('judges')
export class Judge extends BaseEntity {
  @OneToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'personId',
  })
  team: Person;
  @Column()
  personId: number;
}
