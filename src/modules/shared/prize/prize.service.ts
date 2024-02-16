import { Injectable } from "@nestjs/common";
import { PrizesRepository } from "src/database/repositories/prize.repository";

@Injectable()
export class PrizesService {
  constructor(private prizeRepository: PrizesRepository) {}
}
