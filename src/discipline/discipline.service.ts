import { Injectable } from "@nestjs/common";
import { DisciplinesRepository } from "./discipline.repository";

@Injectable()
export class DisciplinesService {
  constructor(private disciplineRepository: DisciplinesRepository) {}
}
