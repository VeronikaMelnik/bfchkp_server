import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MembersRepository {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}
  async create(props: CreateMemberDto) {
    const member = this.membersRepository.create(props);
    const res = await this.membersRepository.save(member);
    return res;
  }
  async update(props: Member) {
    const res = await this.membersRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.membersRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.membersRepository.findOneBy({ id });
    return data;
  }
  async findByTeamId(teamId: number) {
    const data = this.membersRepository.findBy({ teamId });
    return data;
  }
}
