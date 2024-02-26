import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Title } from "src/database";
import { CreateTitleDto } from "src/types/dto/title.dto";
import { Repository } from "typeorm";

@Injectable()
export class TitlesService {
  constructor(
    @InjectRepository(Title)
    private titlesService: Repository<Title>,
  ) {}
  async create(props: CreateTitleDto) {
    const title = this.titlesService.create(props);
    const res = await this.titlesService.save(title);
    return res;
  }
  async update(props: Title) {
    const res = await this.titlesService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.titlesService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.titlesService.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.titlesService.findOneBy({ name });
    return data;
  }
  async findByResultId(resultId: number) {
    const data = this.titlesService.findBy({ resultId });
    return data;
  }
}
