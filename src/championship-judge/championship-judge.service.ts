import { Injectable } from "@nestjs/common";
import { Championships_JudgesRepository } from "./championship-judge.repository";

@Injectable()
export class Championships_JudgesService {
  constructor(private championships_judgesRepository: Championships_JudgesRepository) {}
}
