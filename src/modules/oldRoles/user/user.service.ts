import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PersonsService } from "../../shared/person/person.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/types/dto/user.dto";
import * as bcrypt from 'bcryptjs';
import { User } from "src/database/entities";
import { UsersRepository } from "src/database/repositories";

@Injectable()
export class UsersService {

  constructor(
    private userRepository: UsersRepository,
    private personService: PersonsService,
    private jwtService: JwtService
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  async registration(userDto: CreateUserDto) {
    const canditate = await this.userRepository.findByEmail(userDto.email)
    if (canditate) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
    }
    const person = await this.personService.create({})
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userRepository.create({ ...userDto, password: hashPassword, personId: person.id })
    return this.generateToken(user)
  }

  async generateToken(user: User) {
    const payload = { id: user.id, personId: user.personId, email: user.email }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userRepository.findByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(userDto.password, user.password);
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Неккоректный email или пароль' })
  }
}
