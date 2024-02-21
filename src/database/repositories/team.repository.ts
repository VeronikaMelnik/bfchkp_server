import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../entities/team.entity';
import { CreateTeamDto } from '../../types/dto/team.dto';

@Injectable()
export class TeamsRepository {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}
  async create(props: CreateTeamDto) {
    const team = this.teamsRepository.create(props);
    const res = await this.teamsRepository.save(team);
    return res;
  }
  async update(props: Team) {
    const res = await this.teamsRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.teamsRepository.find();
    return users;
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
