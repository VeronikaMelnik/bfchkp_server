import { Injectable } from "@nestjs/common";
import { CoachesRepository } from "src/database/repositories";
import { CreateCoachDto } from "src/types/dto/coach.dto";

@Injectable()
export class CoachesService {
  constructor(private coachRepository: CoachesRepository) {}

  create(data: CreateCoachDto) {
    return this.coachRepository.create(data)
  }

  getAll() {
    return this.coachRepository.getAll()
  }
}
