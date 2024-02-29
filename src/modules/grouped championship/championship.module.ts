import { Module } from "@nestjs/common";
import { ChampionshipsGroupedService } from "./championship.service";
import { ChampionshipsModule } from "../shared/championship/championship.module";
import { ChampionshipsDisciplinesModule } from "../shared/championshipDiscipline/championshipDiscipline.module";
import { ChampionshipsJudgesModule } from "../shared/championshipJudge/championshipJudge.module";

@Module({
  controllers: [],
  providers: [ChampionshipsGroupedService],
  imports: [
    ChampionshipsModule,
    ChampionshipsDisciplinesModule,
    ChampionshipsJudgesModule,
  ],
  exports: [ChampionshipsGroupedService]
})
export class ChampionshipsGroupedModule {}
