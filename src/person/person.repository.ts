import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonsRepository {
  constructor(
    @InjectRepository(Person)
    private personsRepository: Repository<Person>,
  ) {}
  async create(props: CreatePersonDto) {
    const person = this.personsRepository.create(props);
    const res = await this.personsRepository.save(person);
    return res;
  }
  async update(props: Person) {
    const res = await this.personsRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.personsRepository.find();
    return users;
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
