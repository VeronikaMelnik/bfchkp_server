import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Championship } from "src/database";
import { CreateChampionshipDto } from "src/types/dto/championship.dto";
import { Repository } from "typeorm";

@Injectable()
export class ChampionshipsService {
  constructor(
    @InjectRepository(Championship)
    private championshipsService: Repository<Championship>,
  ) {}
  async create(props: CreateChampionshipDto) {
    const member = this.championshipsService.create(props);
    const res = await this.championshipsService.save(member);
    return res;
  }
  async update(props: Championship) {
    const res = await this.championshipsService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.championshipsService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.championshipsService.findOneBy({ id });
    return data;
  }
}
