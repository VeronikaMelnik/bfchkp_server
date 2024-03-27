import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Person } from './person.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity('users')
export class User extends BaseEntity {

  @ApiProperty({ example: 'veronikamelnik00@mail.ru', description: 'Уникальный email' })
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({ example: '246810', description: 'Пароль' })
  @Column()
  password: string;

  @ApiProperty({ example: '1', description: 'ID' })
  @OneToOne(() => Person, (person) => person.id, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'personId',
  })
  person: Person;
  @Column({
    nullable: true,
  })
  personId: number;
}



