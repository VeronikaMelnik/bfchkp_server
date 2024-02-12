import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coach } from './coach.entity';
import { CreateCoachDto } from './dto/create-coach.dto';

@Injectable()
export class CoachesRepository {
  constructor(
    @InjectRepository(Coach)
    private coachesRepository: Repository<Coach>,
  ) {}
  async create(props: CreateCoachDto) {
    const member = this.coachesRepository.create(props);
    const res = await this.coachesRepository.save(member);
    return res;
  }
  async update(props: Coach) {
    const res = await this.coachesRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.coachesRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.coachesRepository.findOneBy({ id });
    return data;
  }
  async findByTeamId(teamId: number) {
    const data = this.coachesRepository.findBy({ teamId });
    return data;
  }
}
