import { Injectable } from "@nestjs/common";
import { JudgesService } from "src/modules/shared/judge/judge.service";
import { PersonsService } from "src/modules/shared/person/person.service";
import { ResultsService } from "src/modules/shared/result/result.service";
import { CreateJudgeDto } from "src/types/dto/judge.dto";
import { GetAllResultsDto } from "src/types/dto/result.dto";

@Injectable()
export class JudgesAccessService {
  constructor(
    private judgeService: JudgesService,
    private personService: PersonsService,
    private resultService: ResultsService,
  ) {}

  create(data: CreateJudgeDto) {
    return this.judgeService.create(data)
  }

  getAllJudges() {
    return this.judgeService.getAllJudges()
  }

  getAllResults(data: GetAllResultsDto) {
    return this.resultService.getAllResults(data)
  }

  async findById(id: number) {
    const judge = await this.judgeService.findById(id)
    const { name, lastName, image } = await this.personService.findById(judge.personId)
    return {
      ...judge,
      name,
      lastName,
      image,
    }
  }

}
