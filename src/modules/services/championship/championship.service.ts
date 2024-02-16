import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ChampionshipsDisciplinesRepository, ChampionshipsJudgesRepository, ChampionshipsRepository } from "src/database/repositories";
import { JudgesService } from "src/modules/roles/judge/judge.service";
import { DisciplinesService } from "src/modules/shared/discipline/discipline.service";
import { CreateChampionshipDto, FindChampionshipByIdDto } from "src/types/dto/championship.dto";

@Injectable()
export class ChampionshipsService {
  constructor(
    private championshipRepository: ChampionshipsRepository,
    private championshipDisciplineRepository: ChampionshipsDisciplinesRepository,
    private championshipJudgeRepository: ChampionshipsJudgesRepository,
    private judgeService: JudgesService,
    private disciplineService: DisciplinesService,
  ) {}

  create(data: CreateChampionshipDto) {
    return this.championshipRepository.create(data)
  }

  async findById({ id }: FindChampionshipByIdDto) {
    const championship = await this.championshipRepository.findById(id);
    if (!championship) {
      throw new HttpException('Не найдено', HttpStatus.NOT_FOUND)
    }

    const judgesId = await this.championshipJudgeRepository.findByChampionshipId(championship.id)
    const disciplinesId = await this.championshipDisciplineRepository.findByChampionshipId(championship.id)

    const judges = await Promise.all(judgesId.map(async ({ id }) => {
      return this.judgeService.findById(id)
    }))

    const disciplines = await Promise.all(disciplinesId.map(async ({ id }) => {
      return this.disciplineService.findById(id)
    }))

    return {
      id: championship.id,
      name: championship.name,
      date: championship.date,
      judges,
      disciplines,
    }

  }

}
