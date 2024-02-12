import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('championships')
export class Championship extends BaseEntity {
  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  date: Date;
}
