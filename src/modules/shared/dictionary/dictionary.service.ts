import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dictionary } from "src/database";
import { Repository } from "typeorm";

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private dictionaryRepository: Repository<Dictionary>,
  ) { }

  async findById(id: number) {
    return this.dictionaryRepository.findOneBy({ id })
  }

  async save(dictionary: Dictionary) {
    return this.dictionaryRepository.save(dictionary)
  }
  update = this.dictionaryRepository.update

}

