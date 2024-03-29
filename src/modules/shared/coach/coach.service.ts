import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Coach } from "src/database";
import { CreateCoachDto } from "src/types/dto/coach.dto";
import { Repository } from "typeorm";

@Injectable()
export class CoachesService {
  constructor(
    @InjectRepository(Coach)
    private coachesService: Repository<Coach>,
  ) {}
  async create(props: CreateCoachDto) {
    const member = this.coachesService.create(props);
    const res = await this.coachesService.save(member);
    return res;
  }
  async update(props: Coach) {
    const res = await this.coachesService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.coachesService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.coachesService.findOneBy({ id });
    return data;
  }
  async findByTeamId(teamId: number) {
    const data = this.coachesService.findBy({ teamId });
    return data;
  }
  async findByPersonId(personId: number) {
    const data = this.coachesService.findBy({ personId });
    return data;
  }
}
