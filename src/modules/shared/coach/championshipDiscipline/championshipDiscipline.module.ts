import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChampionshipsDisciplinesService } from "./championshipDiscipline.service";
import { ChampionshipDiscipline } from "src/database";


@Module({
  controllers: [],
  providers: [
    ChampionshipsDisciplinesService,
  ],
  imports: [
    TypeOrmModule.forFeature([ChampionshipDiscipline]),
  ],
  exports: [
    ChampionshipsDisciplinesService,
  ]
})
export class ChampionshipsDisciplinesModule {}
