import { Injectable } from "@nestjs/common";
import { JudgesRepository } from "./judge.repository";

@Injectable()
export class JudgesService {
  constructor(private judgeRepository: JudgesRepository) {}
}
