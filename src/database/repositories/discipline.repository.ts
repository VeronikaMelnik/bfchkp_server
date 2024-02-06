import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discipline } from '../entities/discipline.entity';

@Injectable()
export class DisciplineRepository {
  constructor(
    @InjectRepository(Discipline)
    private disciplinesRepository: Repository<Discipline>,
  ) {}
  async create(props: DisciplineType) {
    const discipline = this.disciplinesRepository.create(props);
    const res = await this.disciplinesRepository.save(discipline);
    return res;
  }
  async update(props: Discipline) {
    const res = await this.disciplinesRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.disciplinesRepository.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.disciplinesRepository.findOneBy({ name });
    return data;
  }
}
type DisciplineType = {
  name?: string;
  championshipId?: number;
};
