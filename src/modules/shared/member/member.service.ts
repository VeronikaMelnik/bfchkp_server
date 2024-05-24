import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "src/database";
import { CreateMemberDto } from "src/types/dto/member.dto";
import { Repository } from "typeorm";

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private membersService: Repository<Member>,
  ) {}
  async create(props: CreateMemberDto) {
    const member = this.membersService.create(props);
    const res = await this.membersService.save(member);
    return res;
  }
  async update(props: Member) {
    const res = await this.membersService.save(props);
    return res;
  }

  async getAllMembers({ page, perPage, searchValue = '' }: GetAllProps) {
    const [data, total] = await this.membersService
      .createQueryBuilder('member')
      .select(['member.id', 'member.personId', 'member.person', 'member.team'])
      .leftJoinAndSelect('member.person', 'person')
      .leftJoinAndSelect('member.team', 'team')
      .where(
        'LOWER(person.name) LIKE :searchValue OR LOWER(person.lastName) LIKE :searchValue OR LOWER(team.name) LIKE :searchValue',
        { searchValue: `%${searchValue.toLowerCase()}%` },
      )
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();
    return { data, total };
  }

  async findById(id: number) {
    const data = this.membersService.findOneBy({ id });
    return data;
  }
  async findByTeamId(teamId: number) {
    const data = this.membersService.findBy({ teamId });
    return data;
  }
}

interface GetAllProps {
  page: number,
  perPage: number,
  searchValue: string
}
