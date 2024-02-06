import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prize } from '../entities/prize.entity';

@Injectable()
export class PrizeRepository {
  constructor(
    @InjectRepository(Prize)
    private prizesRepository: Repository<Prize>,
  ) {}
  async create(props: PrizeType) {
    const prize = this.prizesRepository.create(props);
    const res = await this.prizesRepository.save(prize);
    return res;
  }
  async update(props: Prize) {
    const res = await this.prizesRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.prizesRepository.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.prizesRepository.findOneBy({ name });
    return data;
  }
  async findByResultId(resultId: number) {
    const data = this.prizesRepository.findBy({ resultId });
    return data;
  }
}
type PrizeType = {
  name?: string;
  memberId?: number;
  resultId?: number;
};
