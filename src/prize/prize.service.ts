import { Injectable } from "@nestjs/common";
import { PrizesRepository } from "./prize.repository";

@Injectable()
export class PrizesService {
  constructor(private prizeRepository: PrizesRepository) {}
}
