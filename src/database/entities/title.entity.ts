import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../../database/entities/base.entity';
import { Member } from '../../database/entities/member.entity';
import { Result } from '../../database/entities/result.entity';

@Entity('titles')
export class Title extends BaseEntity {
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
