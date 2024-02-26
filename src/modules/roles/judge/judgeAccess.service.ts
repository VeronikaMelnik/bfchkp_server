import { Injectable } from "@nestjs/common";
import { JudgesService } from "src/modules/shared/judge/judge.service";
import { PersonsService } from "src/modules/shared/person/person.service";
import { CreateJudgeDto } from "src/types/dto/judge.dto";

@Injectable()
export class JudgesAccessService {
  constructor(
    private judgeService: JudgesService,
    private personService: PersonsService,
  ) {}

  create(data: CreateJudgeDto) {
    return this.judgeService.create(data)
  }

  getAll() {
    return this.judgeService.getAll()
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
