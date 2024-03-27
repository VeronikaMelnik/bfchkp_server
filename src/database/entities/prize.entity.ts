import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Member } from './member.entity';
import { Result } from './result.entity';

@Entity('prizes')
export class Prize extends BaseEntity {
  @Column()
  name: string;

  @OneToOne(() => Result, (result) => result.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'resultId',
  })
  result: Result;
  @Column()
  resultId: number;

  @ManyToOne(() => Member, (member) => member.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'memberId',
  })
  member: Member;
  @Column()
  memberId: number;
}
