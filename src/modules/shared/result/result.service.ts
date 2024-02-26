import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Result } from "src/database";
import { CreateResultDto } from "src/types/dto/result.dto";
import { Repository } from "typeorm";

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private resultsService: Repository<Result>,
  ) {}
  async create(props: CreateResultDto) {
    const prize = this.resultsService.create(props);
    const res = await this.resultsService.save(prize);
    return res;
  }
  async update(props: Result) {
    const res = await this.resultsService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.resultsService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.resultsService.findOneBy({ id });
    return data;
  }
  async findByName(place: number) {
    const data = this.resultsService.findOneBy({ place });
    return data;
  }
  async findByChampionshipId(championshipId: number) {
    const data = this.resultsService.findBy({ championshipId });
    return data;
  }
}
