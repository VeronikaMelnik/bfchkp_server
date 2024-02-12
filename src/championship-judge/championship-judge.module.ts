import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Championships_JudgesController } from "./championship-judge.controller";
import { Championships_JudgesRepository } from "./championship-judge.repository";
import { Championship_Judge } from "./championship-judge.entity";
import { Championships_JudgesService } from "./championship-judge.service";
import { JwtService } from "@nestjs/jwt";
import { Championship } from "src/championship/championship.entity";
import { Judge } from "src/judge/judge.entity";


@Module({
  controllers: [Championships_JudgesController],
  providers: [Championships_JudgesService, Championships_JudgesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Championship_Judge, Championship, Judge]),
  ],
  exports: [
    Championships_JudgesService,
    Championships_JudgesRepository,
  ]
})
export class Championships_JudgesModule {}
