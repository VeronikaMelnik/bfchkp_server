import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create({ email, password, personId }: CreateUserProps) {
    const user = this.usersRepository.create({
      email,
      password,
      personId,
    });
    const res = await this.usersRepository.save(user);
    return res;
  }
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    return user;
  }
}
type CreateUserProps = {
  email: string;
  password: string;
  personId: number;
};
