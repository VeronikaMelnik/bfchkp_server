import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeamsService } from "./team.service";
import { TeamsRepository } from "./team.repository";
import { TeamsController } from "./team.controller";
import { Team } from "./team.entity";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [TeamsController],
  providers: [TeamsService, TeamsRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Team]),
  ],
  exports: [
    TeamsService,
    TeamsRepository,
  ]
})
export class TeamsModule {}
