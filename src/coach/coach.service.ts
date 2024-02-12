import { Injectable } from "@nestjs/common";
import { CoachesRepository } from "./coach.repository";

@Injectable()
export class CoachesService {
  constructor(private coachRepository: CoachesRepository) {}
}
