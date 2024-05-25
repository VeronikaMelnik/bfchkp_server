import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Championship } from "src/database";
import { CreateChampionshipDto } from "src/types/dto/championship.dto";
import { PaginationDto } from "src/types/dto/pagination.dto";
import { Repository } from "typeorm";

@Injectable()
export class ChampionshipsService {
  constructor(
    @InjectRepository(Championship)
    private championshipsRepository: Repository<Championship>,
  ) { }
  async create({ date, name }: CreateChampionshipDto) {
    const entity = this.championshipsRepository.create({ name, date: new Date(date) });
    const res = await this.championshipsRepository.save(entity);
    return res;
  }
  async update(props: Championship) {
    const res = await this.championshipsRepository.save(props);
    return res;
  }

  async findAll({ page, perPage, searchValue='' }: PaginationDto) {
    const [data, total] = await this.championshipsRepository
      .createQueryBuilder('championship')
      .leftJoinAndSelect('championship.championShipJudges', 'championshipJudge')
      .leftJoinAndSelect('championshipJudge.judge', 'judge')
      .leftJoinAndSelect('judge.person', 'judgePerson')
      .leftJoinAndSelect('championship.championShipDisciplines', 'championshipDiscipline')
      .leftJoinAndSelect('championshipDiscipline.discipline', 'discipline')
      .leftJoinAndSelect('championship.results', 'result')
      .leftJoinAndSelect('result.member', 'member')
      .leftJoinAndSelect('member.person', 'memberPerson')
      .where(
        'LOWER(championship.name) LIKE :searchValue',
        { searchValue: `%${searchValue.toLowerCase()}%` },
      )
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();
    return { data, total };
  }

  async findById(id: number) {
    const data = this.championshipsRepository.findOneBy({ id });
    return data;
  }
}
