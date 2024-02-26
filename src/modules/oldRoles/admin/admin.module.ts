import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminsService } from "./admin.service";
import { AdminsController } from "./admin.controller";
import { TeamsModule } from "../../shared/team/team.module";
import { JudgesModule } from "../judge/judge.module";
import { AdminsRepository } from "src/database/repositories";
import { Admin } from "src/database";
import { CoachesModule } from "../coach/coach.module";
import { PersonsModule } from "src/modules/shared/person/person.module";


@Module({
  controllers: [AdminsController],
  providers: [
    AdminsRepository,
    AdminsService
  ],
  imports: [
    TypeOrmModule.forFeature([Admin]),
    PersonsModule,
    CoachesModule,
    TeamsModule,
    JudgesModule,
  ],
  exports: []
})
export class AdminsModule {}

