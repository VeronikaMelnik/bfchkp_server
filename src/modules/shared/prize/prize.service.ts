import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Prize } from "src/database";
import { CreatePrizeDto } from "src/types/dto/prize.dto";
import { Repository } from "typeorm";

@Injectable()
export class PrizesService {
  constructor(
    @InjectRepository(Prize)
    private prizesService: Repository<Prize>,
  ) {}
  async create(props: CreatePrizeDto) {
    const prize = this.prizesService.create(props);
    const res = await this.prizesService.save(prize);
    return res;
  }
  async update(props: Prize) {
    const res = await this.prizesService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.prizesService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.prizesService.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.prizesService.findOneBy({ name });
    return data;
  }
  async findByResultId(resultId: number) {
    const data = this.prizesService.findBy({ resultId });
    return data;
  }
}
