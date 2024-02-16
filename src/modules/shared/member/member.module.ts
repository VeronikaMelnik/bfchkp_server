import { Module } from "@nestjs/common";
import { MembersRepository } from "src/database/repositories";
import { MembersService } from "./member.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Member } from "src/database";


@Module({
  controllers: [],
  providers: [
    MembersRepository,
    MembersService,
  ],
  imports: [
    TypeOrmModule.forFeature([Member])
  ],
  exports: [
    MembersService,
  ]
})
export class MembersModule {}
