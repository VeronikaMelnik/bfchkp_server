import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Championship } from './championship.entity';
import { Member } from './member.entity';

@Entity('results')
export class Result extends BaseEntity {
  @Column()
  place: number;

  @ManyToOne(() => Championship, (championship) => championship.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'championshipId',
  })
  championship: Championship;
  @Column()
  championshipId: number;

  @ManyToOne(() => Member, (member) => member.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'memberId',
  })
  member: Member;
  @Column()
  memberId: number;
}
