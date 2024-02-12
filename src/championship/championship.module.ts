import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChampionshipsController } from "./championship.controller";
import { ChampionshipsRepository } from "./championship.repository";
import { Championship } from "./championship.entity";
import { ChampionshipsService } from "./championship.service";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [ChampionshipsController],
  providers: [ChampionshipsService, ChampionshipsRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Championship]),
  ],
  exports: [
    ChampionshipsService,
    ChampionshipsRepository,
  ]
})
export class ChampionshipsModule {}
