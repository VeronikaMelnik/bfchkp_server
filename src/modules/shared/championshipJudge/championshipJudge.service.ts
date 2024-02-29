import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChampionshipJudge } from "src/database";
import { CreateChampionshipJudgeDto } from "src/types/dto/championshipJudge.dto";
import { Repository } from "typeorm";

@Injectable()
export class ChampionshipsJudgesService {
  constructor(
    @InjectRepository(ChampionshipJudge)
    private championshipsJudgesService: Repository<ChampionshipJudge>,
  ) {}
  async create(props: CreateChampionshipJudgeDto) {
    const member = this.championshipsJudgesService.create(props);
    const res = await this.championshipsJudgesService.save(member);
    return res;
  }
  async update(props: ChampionshipJudge) {
    const res = await this.championshipsJudgesService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.championshipsJudgesService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.championshipsJudgesService.findOneBy({ id });
    return data;
  }
  async findByJudgeId(judgeId: number) {
    const data = this.championshipsJudgesService.findBy({ judgeId });
    return data;
  }
}
