import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Judge } from '../entities/judge.entity';
import { CreateJudgeDto } from '../../types/dto/create-judge.dto';

@Injectable()
export class JudgesRepository {
  constructor(
    @InjectRepository(Judge)
    private judgesRepository: Repository<Judge>,
  ) {}
  async create(props: CreateJudgeDto) {
    const judge = this.judgesRepository.create(props);
    const res = await this.judgesRepository.save(judge);
    return res;
  }
  async update(props: Judge) {
    const res = await this.judgesRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.judgesRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.judgesRepository.findOneBy({ id });
    return data;
  }
}
