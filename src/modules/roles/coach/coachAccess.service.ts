import { Injectable } from "@nestjs/common";
import { CoachesService } from "src/modules/shared/coach/coach.service";
import { TeamsService } from "src/modules/shared/team/team.service";
import { CreateCoachDto } from "src/types/dto/coach.dto";
import { GetAllTeamsDto } from "src/types/dto/team.dto";

@Injectable()
export class CoachesAccessService {
  constructor(
    private coachService: CoachesService,
    private teamService: TeamsService
  ) {}

  create(data: CreateCoachDto) {
    return this.coachService.create(data)
  }

  getAllCoaches() {
    return this.coachService.getAllCoaches()
  }

  getAllTeams(data: GetAllTeamsDto) {
    return this.teamService.getAllTeams(data)
  }
}
