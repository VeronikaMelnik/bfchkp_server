import { Injectable } from "@nestjs/common";
import { TeamsService } from "../../shared/team/team.service";
import { CreateAdminDto } from "src/types/dto/create-admin.dto";
import { CreateTeamDto } from "src/types/dto/create-team.dto";
import { CreateCoachDto } from "src/types/dto/create-coach.dto";
import { AdminsRepository, CoachesRepository, JudgesRepository } from "src/database/repositories";

@Injectable()
export class AdminsService {
  constructor(
    private adminRepository: AdminsRepository,
    private coachRepository: CoachesRepository,
    private judgeRepository: JudgesRepository,
    private teamService: TeamsService,
  ) {}

  createAdmin(data: CreateAdminDto) {
    return this.adminRepository.create(data)
  }
  createCoach(data: CreateCoachDto) {
    return this.coachRepository.create(data)
  }
  createTeam(data: CreateTeamDto) {
    return this.teamService.create(data)
  }
}
