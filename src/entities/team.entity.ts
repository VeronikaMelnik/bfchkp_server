import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Coach } from './coach.entity';

@Entity('teams')
export class Team extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @OneToMany(() => Coach, (coach) => coach.teamId)
  coaches: User[];
}
