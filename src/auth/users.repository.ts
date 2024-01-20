import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  async create({ email, name, password }: CreateUserProps) {
    const user = this.usersRepository.create({
      email,
      name,
      password,
      isAdmin: false,
    });
    const res = await this.usersRepository.save(user);
    return res;
  }
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email })
    return user;
  }
}
type CreateUserProps = {
  name: string;
  email: string;
  password: string;
};

