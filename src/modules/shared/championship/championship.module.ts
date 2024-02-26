import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChampionshipsService } from "./championship.service";
import { Championship } from "src/database";

@Module({
  controllers: [],
  providers: [
    ChampionshipsService,
  ],
  imports: [
    TypeOrmModule.forFeature([Championship]),
  ],
  exports: [
    ChampionshipsService,
  ]
})
export class ChampionshipsModule {}
