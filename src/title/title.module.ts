import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TitlesService } from "./title.service";
import { TitlesRepository } from "./title.repository";
import { TitlesController } from "./title.controller";
import { Title } from "./title.entity";
import { JwtService } from "@nestjs/jwt";
import { Result } from "src/result/result.entity";
import { Member } from "src/member/member.entity";


@Module({
  controllers: [TitlesController],
  providers: [TitlesService, TitlesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Title, Result, Member]),
  ],
  exports: [
    TitlesService,
    TitlesRepository,
  ]
})
export class TitlesModule {}
