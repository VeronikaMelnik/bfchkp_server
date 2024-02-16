import { Injectable } from "@nestjs/common";
import { ResultsRepository } from "src/database/repositories/result.repository";

@Injectable()
export class ResultsService {
  constructor(private resultRepository: ResultsRepository) {}
}
