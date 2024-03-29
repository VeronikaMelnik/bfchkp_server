import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeamsService } from "./team.service";
import { Team } from "src/database";


@Module({
  controllers: [],
  providers: [
    TeamsService
  ],
  imports: [
    TypeOrmModule.forFeature([Team])
  ],
  exports: [
    TeamsService,
  ]
})
export class TeamsModule {}
