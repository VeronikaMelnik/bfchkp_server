import { Injectable } from "@nestjs/common";
import { Championships_DisciplinesRepository } from "./championship-discipline.repository";

@Injectable()
export class Championships_DisciplinesService {
  constructor(private championships_disciplinesRepository: Championships_DisciplinesRepository) {}
}
