import { Injectable } from "@nestjs/common";
import { TitlesRepository } from "src/database/repositories/title.repository";

@Injectable()
export class TitlesService {
  constructor(private titleRepository: TitlesRepository) {}
}
