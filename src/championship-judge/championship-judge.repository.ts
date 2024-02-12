import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChampionship_JudgeDto } from './dto/create-championship-judge.dto';
import { Championship_Judge } from './championship-judge.entity';

@Injectable()
export class Championships_JudgesRepository {
  constructor(
    @InjectRepository(Championship_Judge)
    private championships_judgesRepository: Repository<Championship_Judge>,
  ) {}
  async create(props: CreateChampionship_JudgeDto) {
    const championship_judge = this.championships_judgesRepository.create(props);
    const res = await this.championships_judgesRepository.save(championship_judge);
    return res;
  }
  async update(props: Championship_Judge) {
    const res = await this.championships_judgesRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.championships_judgesRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.championships_judgesRepository.findOneBy({ id });
    return data;
  }

  async findByJudgeId(judgeId: number) {
    const data = this.championships_judgesRepository.findOneBy({ judgeId });
    return data;
  }

  async findByChampionshipId(championshipId: number) {
    const data = this.championships_judgesRepository.findOneBy({ championshipId });
    return data;
  }

}
