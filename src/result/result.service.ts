import { Injectable } from "@nestjs/common";
import { ResultsRepository } from "./result.repository";

@Injectable()
export class ResultsService {
  constructor(private resultRepository: ResultsRepository) {}
}
