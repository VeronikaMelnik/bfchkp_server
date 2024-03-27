import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ImageEntity } from './image.entity';

@Entity('persons')
export class Person extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  lastName: string;

  @OneToOne(() => ImageEntity)
  @JoinColumn({ name: 'imageId' })
  image: string;
  @Column({ nullable: true })
  imageId: number;
}
