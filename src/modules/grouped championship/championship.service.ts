import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ChampionshipsService } from "../shared/championship/championship.service";
import { ChampionshipsDisciplinesService } from "../shared/coach/championshipDiscipline/championshipDiscipline.service";
import { ChampionshipsJudgesService } from "../shared/championshipJudge/championshipJudge.service";
import { PaginationDto } from "src/types/dto/pagination.dto";
import { CreateChampionshipDto } from "src/types/dto/championship.dto";

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

  findAll(data: PaginationDto) {
    return this.championshipService.findAll(data)
  }

  create(props: CreateChampionshipDto){
    return this.championshipService.create(props)
  }
}
