import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipDiscipline } from "src/database";
import { CreateChampionshipDisciplineDto } from "src/types/dto/championshipDiscipline.dto";
import { Repository } from "typeorm";

@Injectable()
export class ChampionshipsDisciplinesService {
  constructor(
    @InjectRepository(ChampionshipDiscipline)
    private championshipsDisciplinesService: Repository<ChampionshipDiscipline>,
  ) {}
  async create(props: CreateChampionshipDisciplineDto) {
    const member = this.championshipsDisciplinesService.create(props);
    const res = await this.championshipsDisciplinesService.save(member);
    return res;
  }
  async update(props: ChampionshipDiscipline) {
    const res = await this.championshipsDisciplinesService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.championshipsDisciplinesService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.championshipsDisciplinesService.findOneBy({ id });
    return data;
  }

  async findByChampionshipId(championshipId: number) {
    const data = this.championshipsDisciplinesService.findBy({ championshipId });
    return data;
  }
}
