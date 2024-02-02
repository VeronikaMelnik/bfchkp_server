import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('persons')
export class Person extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  image: string;
}
