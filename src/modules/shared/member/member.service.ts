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
  async getAll() {
    const users = await this.membersService.find();
    return users;
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
