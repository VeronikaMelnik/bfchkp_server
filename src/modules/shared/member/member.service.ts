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

  async getAllMembers() {
    const data = await this.membersService
      .createQueryBuilder('member')
      .select(['member.id', 'member.personId', 'member.person', 'member.team'])
      .leftJoinAndSelect('member.person', 'person')
      .leftJoinAndSelect('member.team', 'team')
      .getMany();
    return data;
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
