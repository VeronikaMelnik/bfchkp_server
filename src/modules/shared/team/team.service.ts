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

  async getAllTeams({ page, perPage, searchValue = '' }: GetAllProps) {
    const [data, total] = await this.teamsService
      .createQueryBuilder('teams')
      .where(
        'LOWER(teams.name) LIKE :searchValue OR LOWER(teams.city) LIKE :searchValue OR LOWER(teams.address) LIKE :searchValue',
        { searchValue: `%${searchValue.toLowerCase()}%` },
      )
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();
    return { data, total };
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

  async getOne(id: number) {
    return this.teamsService
      .createQueryBuilder('teams')
      .where({ id })
      .getOneOrFail();
  }
}

interface GetAllProps {
  page: number,
  perPage: number,
  searchValue: string
}
