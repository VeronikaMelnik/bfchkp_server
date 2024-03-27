import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageService } from './image.service';
import { ImageEntity } from 'src/database';

@Module({
  controllers: [],
  providers: [ImageService],
  imports: [TypeOrmModule.forFeature([ImageEntity])],
  exports: [ImageService],
})
export class ImageModule {}
