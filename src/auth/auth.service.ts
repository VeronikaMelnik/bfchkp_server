import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
import { RegistrationFormDataDto } from './dto/auth.controller.dto';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UserRepository,
    private jwtService: JwtService,
  ) { }

  async createUser({ name, email, password }: RegistrationFormDataDto) {
    const conflict = await this.usersRepository.findByEmail(email)
    if (conflict) {
      throw new Error('Already exists')
    }
    const hashPassword = await hash(password, process.env.HASH_ROUNDS)
    const user = await this.usersRepository.create({
      email,
      name,
      password: hashPassword,
    })
    const token = this.generateToken({
      email: user.email,
      name: user.name,
      id: user.id,
      isAdmin: user.isAdmin
    })
    return token
  }
  private generateToken(props: JwtPayloadType) {
    return this.jwtService.sign(props)
  }
}
type JwtPayloadType = {
  email: string,
  name: string,
  id: number,
  isAdmin: boolean,
}
