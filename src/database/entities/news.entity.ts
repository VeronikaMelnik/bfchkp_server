import { Column, Entity, JoinColumn, OneToOne,  } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ImageEntity } from './image.entity';
import { Dictionary } from './dictionary.entity';

@Entity('news')
export class News extends BaseEntity {
  @OneToOne(() => ImageEntity)
  @JoinColumn({ name: 'imageId' })
  image: ImageEntity;
  @Column()
  imageId: number;

  @OneToOne(() => Dictionary)
  @JoinColumn({ name: 'titleId' })
  title: Dictionary;
  @Column({ nullable: false })
  titleId: number;

  @OneToOne(() => Dictionary)
  @JoinColumn({ name: 'descriptionId' })
  description: Dictionary;
  @Column()
  descriptionId: number;
}
