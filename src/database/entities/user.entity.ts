import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Person } from './person.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    default: false,
  })
  isAdmin: boolean;

  @OneToOne(() => Person, (person) => person.id)
  @JoinColumn({
    name: 'personId',
  })
  team: Person;
}
