import { CreateUserDto } from "src/types/dto/user.dto";
import { User } from "src/database/entities";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersService: Repository<User>,
  ) {}
  async create({ email, password, personId }: CreateUserDto) {
    const user = this.usersService.create({
      email,
      password,
      personId,
    });
    const res = await this.usersService.save(user);
    return res;
  }
  async update(props: User) {
    const res = await this.usersService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.usersService.find();
    return users;
  }
  async findByEmail(email: string) {
    const user = await this.usersService.findOneBy({ email });
    return user;
  }
}
