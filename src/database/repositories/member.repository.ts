import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../entities/member.entity';

@Injectable()
export class MemberRepository {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}
  async create(props: MemberType) {
    const member = this.membersRepository.create(props);
    const res = await this.membersRepository.save(member);
    return res;
  }
  async update(props: Member) {
    const res = await this.membersRepository.save(props);
    return res;
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
type MemberType = {
  teamId?: number;
  personId?: number;
};
