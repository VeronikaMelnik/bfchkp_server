import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Judge } from "src/database";
import { CreateJudgeDto } from "src/types/dto/judge.dto";
import { Repository } from "typeorm";

@Injectable()
export class JudgesService {
  constructor(
    @InjectRepository(Judge)
    private judgesService: Repository<Judge>,
  ) {}
  async create(props: CreateJudgeDto) {
    const judge = this.judgesService.create(props);
    const res = await this.judgesService.save(judge);
    return res;
  }
  async update(props: Judge) {
    const res = await this.judgesService.save(props);
    return res;
  }
  async getAllJudges() {
    const data = await this.judgesService
      .createQueryBuilder('judge')
      .select(['judge.id', 'judge.personId', 'judge.person'])
      .leftJoinAndSelect('judge.person', 'person')
      .leftJoinAndSelect('person.image', 'image')
      .getMany();
    return data;
  }

  async findById(id: number) {
    const data = this.judgesService.findOneBy({ id });
    return data;
  }
  async findByPersonId(personId: number) {
    const data = this.judgesService.findBy({ personId });
    return data;
  }
}
