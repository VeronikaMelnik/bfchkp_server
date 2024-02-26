import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Team } from "src/database";
import { CreateTeamDto } from "src/types/dto/team.dto";
import { Repository } from "typeorm";

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsService: Repository<Team>,
  ) {}
  async create(props: CreateTeamDto) {
    const team = this.teamsService.create(props);
    const res = await this.teamsService.save(team);
    return res;
  }
  async update(props: Team) {
    const res = await this.teamsService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.teamsService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.teamsService.findOneBy({ id });
    return data;
  }
  async findByCity(city: string) {
    const data = this.teamsService.findBy({ city });
    return data;
  }
  async findByAddress(address: string) {
    const data = this.teamsService.findBy({ address });
    return data;
  }
}
