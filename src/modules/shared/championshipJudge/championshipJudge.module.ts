import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChampionshipsJudgesService } from "./championshipJudge.service";
import { ChampionshipJudge } from "src/database";


@Module({
  controllers: [],
  providers: [
    ChampionshipsJudgesService,
  ],
  imports: [
    TypeOrmModule.forFeature([ChampionshipJudge]),
  ],
  exports: [
    ChampionshipsJudgesService,
  ]
})
export class ChampionshipsJudgesModule {}
