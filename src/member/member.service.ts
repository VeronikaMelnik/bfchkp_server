import { Injectable } from "@nestjs/common";
import { MembersRepository } from "./member.repository";

@Injectable()
export class MembersService {
  constructor(private memberRepository: MembersRepository) {}
}
