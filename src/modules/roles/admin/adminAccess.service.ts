import { Injectable } from "@nestjs/common";
import { TeamsService } from "../../shared/team/team.service";
import { CreateAdminDto } from "src/types/dto/admin.dto";
import { CreateTeamDto } from "src/types/dto/team.dto";
import { CreateCoachDto } from "src/types/dto/coach.dto";
import { AdminsService } from "src/modules/shared/admin/admin.service";
import { CoachesService } from "src/modules/shared/coach/coach.service";
import { JudgesService } from "src/modules/shared/judge/judge.service";
import { CreateJudgeDto } from "src/types/dto/judge.dto";
import { UsersService } from "src/modules/shared/user/user.service";
import { GetAllUsersDto } from "src/types/dto/user.dto";

@Injectable()
export class AdminsAccessService {
  constructor(
    private adminService: AdminsService,
    private coachService: CoachesService,
    private judgeService: JudgesService,
    private teamService: TeamsService,
    private userService: UsersService,
  ) {}

  createAdmin(data: CreateAdminDto) {
    return this.adminService.create(data)
  }
  createCoach(data: CreateCoachDto) {
    return this.coachService.create(data)
  }
  createTeam(data: CreateTeamDto) {
    return this.teamService.create(data)
  }
  createJudge(data: CreateJudgeDto) {
    return this.judgeService.create(data)
  }

  getAllUsers(data: GetAllUsersDto) {
    return this.userService.getAllUsers(data)
  }
}
