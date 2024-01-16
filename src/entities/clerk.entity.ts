import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Human } from './human.entity';

@Entity('clerks')
export class Clerk extends BaseEntity {
  @Column()
  position: string;

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
