import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoachesController } from "./coach.controller";
import { Coach } from "../../../database/entities/coach.entity";
import { CoachesRepository } from "src/database/repositories";
import { CoachesService } from "./coach.service";
import { PersonsModule } from "../../shared/person/person.module";
import { MembersModule } from "../../shared/member/member.module";


@Module({
  controllers: [CoachesController],
  providers: [
    CoachesRepository,
    CoachesService,
  ],
  imports: [
    TypeOrmModule.forFeature([Coach]),
    PersonsModule,
    MembersModule,
  ],
  exports: [
    CoachesRepository,
  ]
})
export class CoachesModule {}
