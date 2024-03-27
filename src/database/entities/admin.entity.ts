import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Person } from './person.entity';

@Entity('admins')
export class AdminEntity extends BaseEntity {
  @OneToOne(() => Person, (person) => person.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'personId',
  })
  team: Person;
  @Column()
  personId?: number;
}
