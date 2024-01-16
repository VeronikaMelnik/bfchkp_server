import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Human } from './human.entity';

@Entity('coaches')
export class Coach extends BaseEntity {
  @Column({
    nullable: true,
  })
  experience: number;

  @OneToOne(() => Human, (human) => human.id)
  @JoinColumn({
    name: 'humanId',
  })
  human: Human;
  @Column()
  humanId: number;
}
