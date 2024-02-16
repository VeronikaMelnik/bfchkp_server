import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChampionship_DisciplineDto } from '../../types/dto/create-championship-discipline.dto';
import { Championship_Discipline } from '../entities/championship-discipline.entity';

@Injectable()
export class ChampionshipsDisciplinesRepository {
  constructor(
    @InjectRepository(Championship_Discipline)
    private championships_disciplinesRepository: Repository<Championship_Discipline>,
  ) {}
  async create(props: CreateChampionship_DisciplineDto) {
    const championship_discipline = this.championships_disciplinesRepository.create(props);
    const res = await this.championships_disciplinesRepository.save(championship_discipline);
    return res;
  }
  async update(props: Championship_Discipline) {
    const res = await this.championships_disciplinesRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.championships_disciplinesRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.championships_disciplinesRepository.findOneBy({ id });
    return data;
  }

  async findByDiscplineId(disciplineId: number) {
    const data = this.championships_disciplinesRepository.findOneBy({ disciplineId });
    return data;
  }

  async findByChampionshipId(championshipId: number) {
    const data = this.championships_disciplinesRepository.findBy({ championshipId });
    return data;
  }

}
