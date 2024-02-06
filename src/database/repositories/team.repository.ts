import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';

@Injectable()
export class TeamRepository {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}
  async create(props: TeamType) {
    const team = this.teamsRepository.create(props);
    const res = await this.teamsRepository.save(team);
    return res;
  }
  async update(props: Team) {
    const res = await this.teamsRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.teamsRepository.findOneBy({ id });
    return data;
  }
  async findByCity(city: string) {
    const data = this.teamsRepository.findBy({ city });
    return data;
  }
  async findByAddress(address: string) {
    const data = this.teamsRepository.findBy({ address });
    return data;
  }
}
type TeamType = {
  name?: string;
  city?: string;
  address?: string;
  logo?: string;
};
