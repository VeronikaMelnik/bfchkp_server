import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

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
}
