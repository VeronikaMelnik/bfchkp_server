import { Injectable } from "@nestjs/common";
import { TeamsRepository } from "src/database/repositories";
import { CreateTeamDto } from "src/types/dto/team.dto";

@Injectable()
export class TeamsService {
  constructor(private teamRepository: TeamsRepository) {}

  create(data: CreateTeamDto) {
    return this.teamRepository.create(data)
  }

  getAll() {
    return this.teamRepository.getAll()
  }
}
