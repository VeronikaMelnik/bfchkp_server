import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';

@Injectable()
export class PersonRepository {
  constructor(
    @InjectRepository(Person)
    private personsRepository: Repository<Person>,
  ) {}
  async create(props: PersonType) {
    const person = this.personsRepository.create(props);
    const res = await this.personsRepository.save(person);
    return res;
  }
  async update(props: Person) {
    const res = await this.personsRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.personsRepository.findOneBy({ id });
    return data;
  }
  async findByName(name: string) {
    const data = this.personsRepository.findOneBy({ name });
    return data;
  }
  async findByLastName(lastName: string) {
    const data = this.personsRepository.findOneBy({ lastName });
    return data;
  }
}
type PersonType = {
  name?: string;
  lastName?: string;
  image?: string;
};
