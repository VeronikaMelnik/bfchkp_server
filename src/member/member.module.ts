import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembersRepository } from "./member.repository";
import { Member } from "./member.entity";
import { MembersService } from "./member.service";
import { MembersController } from "./member.controller";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [MembersController],
  providers: [MembersService, MembersRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Member]),
  ],
  exports: [
    MembersService,
    MembersRepository,
  ]
})
export class MembersModule {}
