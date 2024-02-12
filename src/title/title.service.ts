import { Injectable } from "@nestjs/common";
import { TitlesRepository } from "./title.repository";

@Injectable()
export class TitlesService {
  constructor(private titleRepository: TitlesRepository) {}
}
