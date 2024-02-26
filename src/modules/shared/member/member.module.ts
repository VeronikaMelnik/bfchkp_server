import { Module } from "@nestjs/common";
import { MembersService } from "./member.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Member } from "src/database";


@Module({
  controllers: [],
  providers: [
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
