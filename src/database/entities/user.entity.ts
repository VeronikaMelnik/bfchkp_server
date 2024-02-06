import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Person } from './person.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'personId',
  })
  person: Person;
  @Column()
  personId: number;
}
