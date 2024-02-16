import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prize } from '../entities/prize.entity';
import { CreatePrizeDto } from '../../types/dto/create-prize.dto';

@Injectable()
export class PrizesRepository {
  constructor(
    @InjectRepository(Prize)
    private prizesRepository: Repository<Prize>,
  ) {}
  async create(props: CreatePrizeDto) {
    const prize = this.prizesRepository.create(props);
    const res = await this.prizesRepository.save(prize);
    return res;
  }
  async update(props: Prize) {
    const res = await this.prizesRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.prizesRepository.find();
    return users;
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
