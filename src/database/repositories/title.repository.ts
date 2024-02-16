import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTitleDto } from '../../types/dto/create-title.dto';
import { Title } from 'src/modules/shared/title/title.entity';

@Injectable()
export class TitlesRepository {
  constructor(
    @InjectRepository(Title)
    private titlesRepository: Repository<Title>,
  ) {}
  async create(props: CreateTitleDto) {
    const title = this.titlesRepository.create(props);
    const res = await this.titlesRepository.save(title);
    return res;
  }
  async update(props: Title) {
    const res = await this.titlesRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.titlesRepository.find();
    return users;
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
