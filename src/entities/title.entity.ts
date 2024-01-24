import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity('titles')
export class Title extends BaseEntity {
  @Column()
  name: string;

  @Column()
  date: string;

  @ManyToOne(() => User, (user) => user.titles)
  @JoinColumn({ name: 'userId' })
  users: User;
  @Column({
    nullable: true,
  })
  userId: number;
}
