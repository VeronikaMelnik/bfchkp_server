import { Injectable, InternalServerErrorException, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dictionary, ImageEntity, News } from "src/database";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class NewsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) { }
  async create({ description, title }: CreationProps) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const {} = title
    try {
      const newTitle = queryRunner.manager.create(Dictionary, {
        ...title,
      });
      const newDescription = queryRunner.manager.create(Dictionary, {
       ...description,
      });

      const [savedTitle, savedDescription] = await Promise.all([
        queryRunner.manager.save(Dictionary, newTitle),
        queryRunner.manager.save(Dictionary, newDescription),
      ]);

      const newNews = queryRunner.manager.create(News, {
        titleId: savedTitle.id,
        descriptionId: savedDescription.id,
      })
      await queryRunner.manager.save(News, newNews);

      await queryRunner.commitTransaction();
      Logger.log(
        `News id ${newNews.id} created`,
        'News',
      );
    } catch (error) {
      Logger.error('Creation news', 'News');
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }

  async findById(id: number) {
    return this.newsRepository.findOneBy({ id })
  }

  async update(news: News) {
    return this.newsRepository.save(news)
  }

  async deleteNews(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const news = await queryRunner.manager.findOneBy(News, { id })

    if (!news) {
      throw new NotFoundException(`News id ${id} doesn't exist`)
    }

    try {
      await Promise.all([
        queryRunner.manager.delete(Dictionary, [{ id: news.descriptionId }, { id: news.titleId }]),
        news.imageId && queryRunner.manager.delete(ImageEntity, [{ id: news.imageId }]),
      ])
      await queryRunner.commitTransaction();
      Logger.warn(
        `News id ${id} deleted`,
        'News',
      );
    } catch (error) {
      Logger.error('Deleting news', 'News');
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }

  async getAll({ page, perPage, searchValue='' }: GetAllProps) {
    const [data, total] = await this.newsRepository
      .createQueryBuilder('news')
      .leftJoinAndSelect('news.title', 'title')
      .leftJoinAndSelect('news.description', 'description')
      .leftJoinAndSelect('news.image', 'image')
      .where(
        'LOWER(description.ru) LIKE :searchValue',
        { searchValue: `%${searchValue.toLowerCase()}%` },
      )
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();
    return { data, total };
  }

  async getOne(id: number) {
    return this.newsRepository
      .createQueryBuilder('news')
      .leftJoinAndSelect('news.description', 'description')
      .leftJoinAndSelect('news.image', 'image')
      .where({ id })
      .getOneOrFail();
  }
}

interface CreationProps {
  description: newDictionary;
}
interface GetAllProps {
  page: number,
  perPage: number,
  searchValue: string
}

interface newDictionary extends Omit<
Dictionary, 'updatedAt'
| 'createdAt'
| 'hasId'
| 'recover'
| 'reload'
| 'remove'
| 'save'
| 'softRemove'
| 'id'
>{
  ru: string
}
