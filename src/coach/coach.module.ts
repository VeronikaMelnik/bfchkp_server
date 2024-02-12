import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoachesController } from "./coach.controller";
import { Coach } from "./coach.entity";
import { CoachesRepository } from "./coach.repository";
import { CoachesService } from "./coach.service";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [CoachesController],
  providers: [CoachesService, CoachesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Coach]),
  ],
  exports: [
    CoachesService,
    CoachesRepository,
  ]
})
export class CoachesModule {}
