import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coach } from '../entities/coach.entity';

@Injectable()
export class CoachRepository {
  constructor(
    @InjectRepository(Coach)
    private coachesRepository: Repository<Coach>,
  ) {}
  async create(props: CoachType) {
    const member = this.coachesRepository.create(props);
    const res = await this.coachesRepository.save(member);
    return res;
  }
  async update(props: Coach) {
    const res = await this.coachesRepository.save(props);
    return res;
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
type CoachType = {
  teamId?: number;
  personId?: number;
};
