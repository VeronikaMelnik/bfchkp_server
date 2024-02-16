import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChampionshipsController } from "./championship.controller";
import { Championship } from "../../../database/entities/championship.entity";
import { ChampionshipsService } from "./championship.service";
import { JwtService } from "@nestjs/jwt";
import { ChampionshipsRepository, ChampionshipsDisciplinesRepository, ChampionshipsJudgesRepository } from "src/database/repositories";
import { Championship_Discipline, Championship_Judge } from "src/database";
import { JudgesModule } from "src/modules/roles/judge/judge.module";
import { DisciplinesModule } from "src/modules/shared/discipline/discipline.module";

@Module({
  controllers: [ChampionshipsController],
  providers: [
    ChampionshipsService,
    ChampionshipsRepository,
    ChampionshipsDisciplinesRepository,
    ChampionshipsJudgesRepository,
    JwtService
  ],
  imports: [
    TypeOrmModule.forFeature([
      Championship,
      Championship_Discipline,
      Championship_Judge,
      JudgesModule,
      DisciplinesModule,
    ]),
  ],
  exports: [
    ChampionshipsService,
    ChampionshipsRepository,
  ]
})
export class ChampionshipsModule {}
