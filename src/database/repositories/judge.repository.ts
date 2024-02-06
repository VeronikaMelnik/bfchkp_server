import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Judge } from '../entities/judge.entity';

@Injectable()
export class JudgeRepository {
  constructor(
    @InjectRepository(Judge)
    private judgesRepository: Repository<Judge>,
  ) {}
  async create(props: JudgeType) {
    const judge = this.judgesRepository.create(props);
    const res = await this.judgesRepository.save(judge);
    return res;
  }
  async update(props: Judge) {
    const res = await this.judgesRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.judgesRepository.findOneBy({ id });
    return data;
  }
}
type JudgeType = {
  personId?: number;
  championshipId?: number;
};
