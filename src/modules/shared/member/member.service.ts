import { Injectable } from "@nestjs/common";
import { MembersRepository } from "src/database/repositories";
import { CreateMemberDto } from "src/types/dto/member.dto";

@Injectable()
export class MembersService {
  constructor(private memberRepository: MembersRepository) {}

  create(data: CreateMemberDto) {
    return this.memberRepository.create(data)
  }

  getAll() {
    return this.memberRepository.getAll()
  }
}
