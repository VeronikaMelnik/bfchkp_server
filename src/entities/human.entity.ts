import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('humans')
export class Human extends BaseEntity {
  @Column()
  name: string;

  @Column()
  image: string;
}
