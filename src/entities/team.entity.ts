import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
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

  @OneToOne(() => User, (user) => user.teamId)
  users: User[];

  @OneToMany(() => Coach, (coach) => coach.teamId)
  coaches: User[];
}
