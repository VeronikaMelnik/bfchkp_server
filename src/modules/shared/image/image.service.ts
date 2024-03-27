import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { storage } from 'firebase-admin';
import { ImageEntity } from 'src/database';
import { PipelineSource } from 'stream';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(ImageEntity)
    private imageRepository: Repository<ImageEntity>,

  ) {}

  async addImageToList({ filePath, data, userId }: CreatingImageProps) {
    const bucket = storage().bucket();
    const file = bucket.file(filePath);
    await file.save(data, { private: false }).catch((err) => {
      Logger.error(err.message, 'Image');
    });
  
    const entity = this.imageRepository.create({
      url: ``,
      filePath,
    });
    Logger.log(`user id: ${userId} upload new image id: ${entity.id}`, 'Image');
    await this.imageRepository.save(entity);
    entity.url = `${process.env.API_URL}/api/images/${entity.id}`;

    this.imageRepository.save(entity);
    return entity
  }

  async updateImage({ data, id, userId }: UpdateImageProps) {
    const image = await this.imageRepository.findOneBy({ id });
    if (!image) {
      throw new NotFoundException({ image: id });
    }
    const bucket = storage().bucket();
    const file = bucket.file(image.filePath);
    await file.save(data, { private: false }).catch((err) => {
      Logger.error(err.message, 'Image');
    });
    Logger.log(`user id: ${userId} update image id: ${id}`, 'Image');
    return image;
  }

  async deleteImage(id: number) {
    const image = await this.imageRepository.findOneBy({ id });
    if (!image) {
      throw new NotFoundException({ image: id });
    }
    const bucket = storage().bucket();
    try {
      await Promise.all([
        bucket.file(image.filePath).delete(),
        this.imageRepository.delete({ id }),
        Logger.log(`image id: id delete successful`, 'Image'),
      ]);
    } catch (error) {
      Logger.error(`Deleting image id: ${id}`, 'Image');
      throw new InternalServerErrorException({ image: id, error });
    }
  }

  async getImage({ id, res }: GetImage) {
    Logger.log('Get image', 'Image');
    const image = await this.imageRepository.findOneBy({ id });
    if (!image) {
      throw new NotFoundException({ image: id });
    }
    const bucket = storage().bucket();
    const file = bucket.file(image.filePath);
    const readStream = file.createReadStream();

    const data: Uint8Array[] = [];
    readStream.on('data', (chunk) => {
      data.push(chunk);
    });

    readStream.on('end', () => {
      const buffer = Buffer.concat(data);
      res.send(buffer);
    });

    readStream.on('error', (error) => {
      throw new NotFoundException({ image: id, error });
    });
  }
}

interface CreatingImageProps {
  filePath: string;
  data: string | Buffer | PipelineSource<string | Buffer>;
  userId: number;
}

interface UpdateImageProps {
  id: number;
  data: string | Buffer | PipelineSource<string | Buffer>;
  userId: number;
}

interface GetImage {
  id: number;
  res: Response;
}
