import {
  CreateDateColumn,
  BaseEntity as Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class BaseEntity extends Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
