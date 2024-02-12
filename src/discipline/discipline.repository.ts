import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discipline } from './discipline.entity';
import { CreateDisciplineDto } from './dto/create-discipline.dto';

@Injectable()
export class DisciplinesRepository {
  constructor(
    @InjectRepository(Discipline)
    private disciplinesRepository: Repository<Discipline>,
  ) {}
  async create(props: CreateDisciplineDto) {
    const discipline = this.disciplinesRepository.create(props);
    const res = await this.disciplinesRepository.save(discipline);
    return res;
  }
  async update(props: Discipline) {
    const res = await this.disciplinesRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.disciplinesRepository.find();
    return users;
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
