import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
import {
  AuthorizationFormDataDto,
  RegistrationFormDataDto,
} from './dto/auth.controller.dto';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async createUser({ name, email, password }: RegistrationFormDataDto) {
    const conflict = await this.usersRepository.findByEmail(email);
    if (conflict) {
      console.log(conflict);
      throw new Error('Already exists');
    }
    const hashPassword = await hash(password, Number(process.env.HASH_ROUNDS));
    const user = await this.usersRepository.create({
      email,
      name,
      password: hashPassword,
    });
    const token = this.generateToken({
      email: user.email,
      name: user.name,
      id: user.id,
      isAdmin: user.isAdmin,
    });
    return token;
  }
  async loginUser(props: AuthorizationFormDataDto) {
    const user = await this.validateUser(props);
    const token = this.generateToken({
      email: user.email,
      name: user.name,
      id: user.id,
      isAdmin: user.isAdmin,
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
  name: string;
  id: number;
  isAdmin: boolean;
};
