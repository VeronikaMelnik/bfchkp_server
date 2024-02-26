import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Discipline } from "src/database";
import { CreateDisciplineDto } from "src/types/dto/discipline.dto";
import { Repository } from "typeorm";

@Injectable()
export class DisciplinesService {
  constructor(
    @InjectRepository(Discipline)
    private disciplinesService: Repository<Discipline>,
  ) {}
  async create(props: CreateDisciplineDto) {
    const discipline = this.disciplinesService.create(props);
    const res = await this.disciplinesService.save(discipline);
    return res;
  }
  async update(props: Discipline) {
    const res = await this.disciplinesService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.disciplinesService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.disciplinesService.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.disciplinesService.findOneBy({ name });
    return data;
  }
}
