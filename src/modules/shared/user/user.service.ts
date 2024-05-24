import { User } from "src/database/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  async create({ email, password, personId }: CreationProps) {
    const user = this.usersRepository.create({
      email,
      password,
      personId,
    });
    const res = await this.usersRepository.save(user);
    return res;
  }
  async save(props: User) {
    const res = await this.usersRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.usersRepository.find();
    return users;
  }
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    return user;
  }
  async findById(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }

  async getAllUsers({ page, perPage, searchValue = '' }: GetAllSchemeType) {
    const [data, total] = await this.usersRepository
      .createQueryBuilder('user')
      .select(['user.email', 'user.id', 'user.person'])
      .leftJoinAndSelect('user.person', 'person')
      .leftJoinAndSelect('person.image', 'image.image')
      .where(
        'LOWER(user.email) LIKE :searchValue OR LOWER(person.name) LIKE :searchValue OR LOWER(person.lastName) LIKE :searchValue',
        { searchValue: `%${searchValue.toLocaleLowerCase()}%` },
      )
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();
    return { data, total };
  }

  getUserData(id: number) {
    return this.usersRepository
      .createQueryBuilder('user')
      .select(['user.email', 'user.id', 'user.person'])
      .leftJoinAndSelect('user.person', 'person')
      .leftJoinAndSelect('person.image', 'image')
      .where({ id })
      .getOneOrFail();
  }
}

interface CreationProps {
  email: string,
  password: string,
  personId: number,
}

interface GetAllSchemeType {
  page: number,
  perPage: number,
  searchValue: string,
}
