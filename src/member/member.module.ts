import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembersRepository } from "./member.repository";
import { Member } from "./member.entity";
import { MembersService } from "./member.service";
import { MembersController } from "./member.controller";
import { JwtService } from "@nestjs/jwt";
import { Person } from "src/person/person.entity";
import { Team } from "src/team/team.entity";


@Module({
  controllers: [MembersController],
  providers: [MembersService, MembersRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Member, Team, Person]),
  ],
  exports: [
    MembersService,
    MembersRepository,
  ]
})
export class MembersModule {}
