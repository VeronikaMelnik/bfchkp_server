import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('teams')
export class Team extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    nullable: true,
  })
  address: string;

  @Column({
    nullable: true,
  })
  logo: string;
}
