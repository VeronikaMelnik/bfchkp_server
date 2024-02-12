import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoachesController } from "./coach.controller";
import { Coach } from "./coach.entity";
import { CoachesRepository } from "./coach.repository";
import { CoachesService } from "./coach.service";
import { JwtService } from "@nestjs/jwt";
import { Team } from "src/team/team.entity";
import { Person } from "src/person/person.entity";


@Module({
  controllers: [CoachesController],
  providers: [CoachesService, CoachesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Coach, Team, Person]),
  ],
  exports: [
    CoachesService,
    CoachesRepository,
  ]
})
export class CoachesModule {}
