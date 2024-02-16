import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeamsService } from "./team.service";
import { Team } from "../../../database/entities/team.entity";
import { TeamsRepository } from "src/database/repositories";


@Module({
  controllers: [],
  providers: [
    TeamsRepository,
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
