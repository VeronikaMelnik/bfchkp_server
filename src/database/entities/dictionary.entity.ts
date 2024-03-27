import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('dictionaries')
export class Dictionary extends BaseEntity {
  @Column({ default: '' })
  ru: string;

  @Column({ nullable: true })
  be: string;

  @Column({ nullable: true })
  en: string;
}
