import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Title } from '../entities/title.entity';

@Injectable()
export class TitleRepository {
  constructor(
    @InjectRepository(Title)
    private titlesRepository: Repository<Title>,
  ) {}
  async create(props: TitleType) {
    const title = this.titlesRepository.create(props);
    const res = await this.titlesRepository.save(title);
    return res;
  }
  async update(props: Title) {
    const res = await this.titlesRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.titlesRepository.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.titlesRepository.findOneBy({ name });
    return data;
  }
  async findByResultId(resultId: number) {
    const data = this.titlesRepository.findBy({ resultId });
    return data;
  }
}
type TitleType = {
  name?: string;
  memberId?: number;
  resultId?: number;
};
