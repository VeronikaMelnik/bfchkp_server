import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coach } from "src/database";
import { CoachesService } from "./coach.service";


@Module({
  controllers: [],
  providers: [
    CoachesService,
  ],
  imports: [
    TypeOrmModule.forFeature([Coach]),
  ],
  exports: [
    CoachesService,
  ]
})
export class CoachesModule {}
