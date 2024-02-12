import { Injectable } from "@nestjs/common";
import { ChampionshipsRepository } from "./championship.repository";

@Injectable()
export class ChampionshipsService {
  constructor(private championshipRepository: ChampionshipsRepository) {}
}
