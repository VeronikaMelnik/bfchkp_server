import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/database";
import { CreatePersonDto } from "src/types/dto/person.dto";
import { Repository } from "typeorm";

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personsService: Repository<Person>,
  ) {}
  async create(props: CreatePersonDto) {
    const person = this.personsService.create(props);
    const res = await this.personsService.save(person);
    return res;
  }
  async update(props: Person) {
    const res = await this.personsService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.personsService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.personsService.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.personsService.findOneBy({ name });
    return data;
  }
  async findByLastName(lastName: string) {
    const data = this.personsService.findOneBy({ lastName });
    return data;
  }
}
