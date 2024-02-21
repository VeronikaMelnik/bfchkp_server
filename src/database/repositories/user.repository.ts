import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../types/dto/user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create({ email, password, personId }: CreateUserDto) {
    const user = this.usersRepository.create({
      email,
      password,
      personId,
    });
    const res = await this.usersRepository.save(user);
    return res;
  }
  async update(props: User) {
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

}
