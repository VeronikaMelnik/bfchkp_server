import { Injectable } from "@nestjs/common";
import { TeamsRepository } from "./team.repository";

@Injectable()
export class TeamsService {
  constructor(private teamRepository: TeamsRepository) {}
}
