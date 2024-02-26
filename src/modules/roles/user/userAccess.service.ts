import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PersonsService } from "../../shared/person/person.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/types/dto/user.dto";
import * as bcrypt from 'bcryptjs';
import { User } from "src/database/entities";
import { UsersService } from "src/modules/shared/user/user.service";

@Injectable()
export class UsersAccessService {

  constructor(
    private userService: UsersService,
    private personService: PersonsService,
    private jwtService: JwtService
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }


  async generateToken(user: User) {
    const payload = { id: user.id, personId: user.personId, email: user.email }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.findByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Неккоректный email или пароль' })
  }
}
