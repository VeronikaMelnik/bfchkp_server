import { HttpException, HttpStatus, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { TeamsService } from "../../shared/team/team.service";
import { CreateAdminDto } from "src/types/dto/admin.dto";
import { CreateTeamDto } from "src/types/dto/team.dto";
import { CreateCoachDto } from "src/types/dto/coach.dto";
import { AdminsService } from "src/modules/shared/admin/admin.service";
import { CoachesService } from "src/modules/shared/coach/coach.service";
import { JudgesService } from "src/modules/shared/judge/judge.service";
import { CreateJudgeDto } from "src/types/dto/judge.dto";
import { UsersService } from "src/modules/shared/user/user.service";
import { GetAllUsersDto } from "src/types/dto/user.dto";
import { NewsService } from "src/modules/shared/news/news.service";
import { CreateNewsDto } from "src/types/dto/news.dto";
import { ImageService } from "src/modules/shared/image/image.service";
import { TokenPayload } from "src/types/token/token.types";
import { DictionaryService } from "src/modules/shared/dictionary/dictionary.service";
import { Dictionary } from "src/database";
import { MembersService } from "src/modules/shared/member/member.service";
import { DisciplinesService } from "src/modules/shared/discipline/discipline.service";
import { TitlesService } from "src/modules/shared/title/title.service";
import { CreateMemberDto, GetAllMembersDto } from "src/types/dto/member.dto";
import { PersonsService } from "src/modules/shared/person/person.service";
import { CreateChampionshipDto } from "src/types/dto/championship.dto";
import { ChampionshipsGroupedService } from "src/modules/grouped championship/championship.service";

@Injectable()
export class AdminsAccessService {
  constructor(
    private adminService: AdminsService,
    private coachService: CoachesService,
    private judgeService: JudgesService,
    private teamService: TeamsService,
    private userService: UsersService,
    private newsService: NewsService,
    private imageService: ImageService,
    private dictionaryService: DictionaryService,
    private memberService: MembersService,
    private disciplineService: DisciplinesService,
    private titleService: TitlesService,
    private personService: PersonsService,
    private championshipService: ChampionshipsGroupedService,

  ) { }

  createAdmin(data: CreateAdminDto) {
    return this.adminService.create(data)
  }
  createCoach(data: CreateCoachDto) {
    return this.coachService.create(data)
  }
  createTeam(data: CreateTeamDto) {
    return this.teamService.create(data)
  }
  createJudge(data: CreateJudgeDto) {
    return this.judgeService.create(data)
  }

  getAllUsers(data: GetAllUsersDto) {
    return this.userService.getAllUsers(data)
  }

  createNews(data: CreateNewsDto) {
    return this.newsService.create(data)
  }

  deleteNews(id: number) {
    return this.newsService.deleteNews(id)
  }

  async createNewsImage({ data, id, user }: CreateImageProps) {
    const news = await this.newsService.findById(id);
    if (!news) {
      Logger.warn('person not found', 'Person');
      throw new NotFoundException(`News with id: ${id}`);
    }
    if (news.imageId) {
      const image = await this.imageService.updateImage({ data, id: news.imageId, userId: user.id })
      return image.url
    } else {
      const filePath = `news/${news.id}`;
      const image = await this.imageService.uploadImage({
        filePath,
        data,
        userId: user.id,
      });
      news.imageId = image.id
      await this.newsService.update(news)
      return image.url
    }
  }

  async updateDictionary({ id, ...data }: UpdateDictionaryProps) {
    const dict = await this.dictionaryService.findById(id)
    Object.entries(data).forEach(([key, value]: [keyof typeof data, string]) => {
      if (key && value) {
        dict[key] = value
      }
    })
    return this.dictionaryService.save(dict)
  }

  async updateNews({ description, id, title }: UpdateNewsProps) {
    const news = await this.newsService.findById(id)
    if (!news) {
      throw new NotFoundException();
    }
    await Promise.all([
      this.dictionaryService.update({ id: news.titleId, dictionary: title }),
      this.dictionaryService.update({ id: news.descriptionId, dictionary: description },),
    ])
    return { data: news }
  }

  async createMember({ personId, teamId }: CreateMemberDto) {
    const team = await this.teamService.findById(teamId)
    const person = await this.personService.findById(personId)
    if (!team || !person) {
      throw new HttpException('not found', HttpStatus.BAD_REQUEST)
    }
    return this.memberService.create({ personId, teamId })
  }

  async deleteMember(id: number) {
    try {
      this.memberService.remove(id)
    } catch (error) {
      throw new HttpException('not found', HttpStatus.BAD_REQUEST)
    }
    return { data: 'ok' }
  }
  getAllMembers(data: GetAllMembersDto) {
    return this.memberService.getAllMembers(data)
  }
  getAllDisciplines() {
    return this.disciplineService.getAllDisciplines()
  }

  getAllTitles() {
    return this.titleService.getAllTitles()
  }

  async createChampionship(props: CreateChampionshipDto) {
    return { data: await this.championshipService.create(props) }
  }
}



interface CreateImageProps {
  data: Buffer;
  id: number;
  user: TokenPayload
}

type Locales = Partial<
  Omit<
    Dictionary, 'updatedAt'
    | 'createdAt'
    | 'hasId'
    | 'recover'
    | 'reload'
    | 'remove'
    | 'save'
    | 'softRemove'
  >>

interface UpdateNewsProps {
  id: number
  title: Locales;
  description: Locales;

}
interface UpdateDictionaryProps extends Locales {
  id: number;
}
