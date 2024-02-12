import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('disciplines')
export class Discipline extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string;
}
