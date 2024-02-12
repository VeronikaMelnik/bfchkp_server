import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResultsRepository } from "./result.repository";
import { Result } from "./result.entity";
import { ResultsService } from "./result.service";
import { ResultsController } from "./result.controller";
import { JwtService } from "@nestjs/jwt";
import { Member } from "src/member/member.entity";
import { Championship } from "src/championship/championship.entity";


@Module({
  controllers: [ResultsController],
  providers: [ResultsService, ResultsRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Result, Member, Championship]),
  ],
  exports: [
    ResultsService,
    ResultsRepository,
  ]
})
export class ResultsModule {}
