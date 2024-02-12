import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './result.entity';
import { CreateResultDto } from './dto/create-result.dto';

@Injectable()
export class ResultsRepository {
  constructor(
    @InjectRepository(Result)
    private resultsRepository: Repository<Result>,
  ) {}
  async create(props: CreateResultDto) {
    const prize = this.resultsRepository.create(props);
    const res = await this.resultsRepository.save(prize);
    return res;
  }
  async update(props: Result) {
    const res = await this.resultsRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.resultsRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.resultsRepository.findOneBy({ id });
    return data;
  }
  async findByName(place: number) {
    const data = this.resultsRepository.findOneBy({ place });
    return data;
  }
  async findByChampionshipId(championshipId: number) {
    const data = this.resultsRepository.findBy({ championshipId });
    return data;
  }
}
