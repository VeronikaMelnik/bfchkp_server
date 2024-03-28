import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dictionary } from "src/database";
import { Repository } from "typeorm";

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private newsRepository: Repository<Dictionary>,
  ) { }

  async findById(id: number) {
    return this.newsRepository.findOneBy({ id })
  }

  async update(dictionary: Dictionary) {
    return this.newsRepository.save(dictionary)
  }

}

