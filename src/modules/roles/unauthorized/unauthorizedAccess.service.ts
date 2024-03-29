import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PersonsService } from "../../shared/person/person.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto, LoginUserDto } from "src/types/dto/user.dto";
import * as bcrypt from 'bcryptjs';
import { User } from "src/database/entities";
import { UsersService } from "src/modules/shared/user/user.service";
import { JudgesService } from "src/modules/shared/judge/judge.service";
import { DisciplinesService } from "src/modules/shared/discipline/discipline.service";
import { ChampionshipsGroupedService } from "src/modules/grouped championship/championship.service";
import { ImageService } from "src/modules/shared/image/image.service";
import { Response } from "express";
import { NewsService } from "src/modules/shared/news/news.service";

@Injectable()
export class UnauthorizedAccessService {

  constructor(
    private userService: UsersService,
    private personService: PersonsService,

    private imageService: ImageService,
    private championshipService: ChampionshipsGroupedService,
    private judgeService: JudgesService,
    private disciplineService: DisciplinesService,
    private newsService: NewsService,

    private jwtService: JwtService
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto)
    return this.generateToken(user)
  }

  async registration({email, lastName, name, password}: CreateUserDto) {
    const candidate = await this.userService.findByEmail(email)
    if (candidate) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.CONFLICT)
    }
    const person = await this.personService.create({lastName, name})
    const hashPassword = await bcrypt.hash(password, Number(process.env.HASH_ROUNDS));
    const user = await this.userService.create({ email, password: hashPassword, personId: person.id })
    return this.generateToken(user)
  }

  async generateToken(user: User) {
    const payload = { id: user.id, personId: user.personId, email: user.email }
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser({email, password}: ValidateUserProps) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException({ message: 'Неккоректный email или пароль' })
    }
    const passwordEquals = await bcrypt.compare(password, user.password);
    if (!passwordEquals) {
      throw new UnauthorizedException({ message: 'Неккоректный email или пароль' })
    }
    return user;
  }

  async getChampionshipById(id: number) {
    const championship = await this.championshipService.findById(id)

    const [judges, disciplines] = await Promise.all([
      Promise.all(
        championship.judges.map(async ({ id }) => {
          return this.judgeService.findById(id)
        })
      ),
      Promise.all(
        championship.disciplines.map(async ({ id }) => {
          return this.disciplineService.findById(id)
        })
      )
    ])

    return {
      id: championship.id,
      name: championship.name,
      judges,
      disciplines,
    }
  }

  getImage(data: getImage){
    return this.imageService.getImage(data)
  }

  getAllNews(data: GetAllProps){
    return this.newsService.getAll(data)
  }

  getOneNews(id: number){
    try {
      return this.newsService.getOne(id)
    } catch (error) {
      throw new NotFoundException(`News id: ${id} doesn't exist`)
    }
  }
}

interface GetAllProps {
  page: number,
  perPage: number,
  searchValue: string
}

interface ValidateUserProps {
  email: string;
  password: string;
}

interface getImage {
  id: number;
  res: Response;
}
