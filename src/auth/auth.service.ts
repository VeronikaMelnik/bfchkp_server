import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import {
  AuthorizationFormDataDto,
  RegistrationFormDataDto,
} from './dto/auth.controller.dto';
import { compare, hash } from 'bcrypt';
import { PersonRepository } from 'src/database/repositories/person.repository';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UserRepository,
    private personsRepository: PersonRepository,
    private jwtService: JwtService,
  ) {}

  async createUser({ name, email, password }: RegistrationFormDataDto) {
    const conflict = await this.usersRepository.findByEmail(email);
    if (conflict) {
      console.log(conflict);
      throw new Error('Already exists');
    }
    const hashPassword = await hash(password, Number(process.env.HASH_ROUNDS));
    const person = await this.personsRepository.create({ name });
    const user = await this.usersRepository.create({
      email,
      personId: person.id,
      password: hashPassword,
    });
    const token = this.generateToken({
      email: user.email,
      name: person.name,
      id: user.id,
      isAdmin: false,
    });
    return token;
  }
  async loginUser(props: AuthorizationFormDataDto) {
    const user = await this.validateUser(props);
    const person = await this.personsRepository.findById(user.personId);
    const token = this.generateToken({
      email: user.email,
      name: person.name,
      id: user.id,
      isAdmin: false,
    });
    return token;
  }

  private generateToken(props: JwtPayloadType) {
    return this.jwtService.sign(props);
  }

  private async validateUser(props: AuthorizationFormDataDto) {
    const foundUser = await this.usersRepository.findByEmail(props.email);
    const passwordEquals = await compare(props.password, foundUser.password);
    if (foundUser && passwordEquals) {
      return foundUser;
    } else {
      throw new Error('Incorrect email or password');
    }
  }
}
type JwtPayloadType = {
  email: string;
  name: string | null;
  id: number;
  isAdmin: boolean;
};
