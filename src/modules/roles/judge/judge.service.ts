import { Injectable } from "@nestjs/common";
import { JudgesRepository } from "src/database/repositories/judge.repository";
import { PersonsService } from "src/modules/shared/person/person.service";

@Injectable()
export class JudgesService {
  constructor(
    private judgeRepository: JudgesRepository,
    private personService: PersonsService,
  ) {}

  async findById(id: number) {
    const judge = await this.judgeRepository.findById(id)
    const { name, lastName, image } = await this.personService.findById(judge.personId)
    return {
      ...judge,
      name,
      lastName,
      image,
    }
  }

}
