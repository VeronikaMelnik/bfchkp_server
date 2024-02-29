import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ChampionshipsService } from "../shared/championship/championship.service";
import { ChampionshipsDisciplinesService } from "../shared/championshipDiscipline/championshipDiscipline.service";
import { ChampionshipsJudgesService } from "../shared/championshipJudge/championshipJudge.service";

@Injectable()
export class ChampionshipsGroupedService {
  constructor(
    private championshipService: ChampionshipsService,
    private championshipDisciplineService: ChampionshipsDisciplinesService,
    private championshipJudgeService: ChampionshipsJudgesService,
  ) {}
  async findById(id: number) {
    const data = await this.championshipService.findById(id);

    if (!data) {
      throw new HttpException('Чемпионат не найден', HttpStatus.NOT_FOUND)
    }

    const disciplines = await this.championshipDisciplineService.findByChampionshipId(data.id);
    const judges = await this.championshipJudgeService.findByJudgeId(data.id);
    return { ...data, disciplines, judges };
  }
}
