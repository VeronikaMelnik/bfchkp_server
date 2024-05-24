import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/database";
import { Repository } from "typeorm";

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}
  async create(props: CreationProps) {
    const person = this.personRepository.create(props);
    const res = await this.personRepository.save(person);
    return res;
  }
  async save(props: Person) {
    const res = await this.personRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.personRepository.find();
    return users;
  }

  async findById(id: number) {
    const data = this.personRepository.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.personRepository.findOneBy({ name });
    return data;
  }
  async findByLastName(lastName: string) {
    const data = this.personRepository.findOneBy({ lastName });
    return data;
  }
}

interface CreationProps {
  name: string;
  lastName: string;
}
