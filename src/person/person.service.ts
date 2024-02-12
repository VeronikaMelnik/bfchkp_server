import { Injectable } from "@nestjs/common";
import { PersonsRepository } from "./person.repository";

@Injectable()
export class PersonsService {
  constructor(private personRepository: PersonsRepository) {}
}
