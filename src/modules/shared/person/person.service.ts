import { Injectable } from "@nestjs/common";
import { PersonsRepository } from "src/database/repositories/person.repository";
import { CreatePersonDto } from "src/types/dto/person.dto";

@Injectable()
export class PersonsService {
  constructor(private personRepository: PersonsRepository) {}

  create(personDto: Partial<CreatePersonDto>) {
    return this.personRepository.create(personDto)
  }

  findById(id: number) {
    return this.personRepository.findById(id)
  }
}
