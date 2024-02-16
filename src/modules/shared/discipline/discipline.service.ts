import { Injectable } from "@nestjs/common";
import { DisciplinesRepository } from "src/database/repositories/discipline.repository";

@Injectable()
export class DisciplinesService {
  constructor(
    private disciplineRepository: DisciplinesRepository
  ) {}

  findById(id: number) {
    return this.disciplineRepository.findById(id)
  }
}
