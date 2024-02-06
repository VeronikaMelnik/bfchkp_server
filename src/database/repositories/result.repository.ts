import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from '../entities/result.entity';

@Injectable()
export class ResultRepository {
  constructor(
    @InjectRepository(Result)
    private prizesRepository: Repository<Result>,
  ) {}
  async create(props: ResultType) {
    const prize = this.prizesRepository.create(props);
    const res = await this.prizesRepository.save(prize);
    return res;
  }
  async update(props: Result) {
    const res = await this.prizesRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.prizesRepository.findOneBy({ id });
    return data;
  }
  async findByName(place: number) {
    const data = this.prizesRepository.findOneBy({ place });
    return data;
  }
  async findByChampionshipId(championshipId: number) {
    const data = this.prizesRepository.findBy({ championshipId });
    return data;
  }
}
type ResultType = {
  place?: number;
  memberId?: number;
  championshipId?: number;
};
