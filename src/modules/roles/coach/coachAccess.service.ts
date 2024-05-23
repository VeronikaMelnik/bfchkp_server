import { Injectable } from "@nestjs/common";
import { CoachesService } from "src/modules/shared/coach/coach.service";
import { CreateCoachDto } from "src/types/dto/coach.dto";

@Injectable()
export class CoachesAccessService {
  constructor(private coachService: CoachesService) {}

  create(data: CreateCoachDto) {
    return this.coachService.create(data)
  }

  getAllCoaches() {
    return this.coachService.getAllCoaches()
  }
}
