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
  async save(props: Result) {
    const res = await this.resultsService.save(props);
    return res;
  }

  async getAllResults({ page, perPage, searchValue = '' }: GetAllProps) {
    const [data, total] = await this.resultsService
      .createQueryBuilder('result')
      .select(['result.id', 'result.place', 'result.championshipId', 'result.memberId', 'result.championship', 'result.member'])
      .leftJoinAndSelect('result.championship', 'championship')
      .leftJoinAndSelect('result.member', 'member')
      .leftJoinAndSelect('member.person', 'person')
      .leftJoinAndSelect('person.image', 'image')
      .where(
        'result.place::text LIKE :searchValue OR LOWER(person.name) LIKE :searchValue OR LOWER(person.lastName) LIKE :searchValue OR LOWER(championship.name) LIKE :searchValue OR TO_CHAR(championship.date, \'YYYY-MM-DD HH24:MI:SS\') LIKE :searchValue',
        { searchValue: `%${searchValue.toLowerCase()}%` },
      )
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();
    return { data, total };
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

  async getOne(id: number) {
    return this.resultsService
      .createQueryBuilder('result')
      .leftJoinAndSelect('result.championship', 'championship')
      .leftJoinAndSelect('result.member', 'member')
      .leftJoinAndSelect('member.person', 'person')
      .leftJoinAndSelect('person.image', 'image')
      .where({ id })
      .getOneOrFail();
  }
  deleteEntity(id: number) {
    return this.resultsService.delete({ id })
  }
}

interface GetAllProps {
  page: number,
  perPage: number,
  searchValue: string
}

