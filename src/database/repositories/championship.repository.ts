import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Championship } from '../entities/championship.entity';
import { CreateChampionshipDto } from '../../types/dto/championship.dto';

@Injectable()
export class ChampionshipsRepository {
  constructor(
    @InjectRepository(Championship)
    private championshipsRepository: Repository<Championship>,
  ) {}
  async create(props: CreateChampionshipDto) {
    const championship = this.championshipsRepository.create(props);
    const res = await this.championshipsRepository.save(championship);
    return res;
  }
  async update(props: Championship) {
    const res = await this.championshipsRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.championshipsRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.championshipsRepository.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.championshipsRepository.findOneBy({ name });
    return data;
  }
}
