import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Championship } from "src/database";
import { CreateChampionshipDto } from "src/types/dto/championship.dto";
import { Repository } from "typeorm";


@Injectable()
export class ChampionshipsService {
  constructor(
    @InjectRepository(Championship)
    private championshipsRepository: Repository<Championship>,
  ) {}
  async create(props: CreateChampionshipDto) {
    const championship = this.championshipsRepository.create(props);
    const res = await this.championshipsRepository.save(championship);
    return res;
  }
  async update(props: Championship) {
    const res = await this.championshipsRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.championshipsRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.championshipsRepository.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.championshipsRepository.findOneBy({ name });
    return data;
  }

}
